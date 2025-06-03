const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevCommand = process.env.npm_lifecycle_event === 'dev';

console.log('Building in', isProduction ? 'PRODUCTION' : 'DEVELOPMENT', 'mode');

// Cert paths for HTTPS
const keyPath = path.resolve(__dirname, '../certs/webpackcompiler.local.key');
const certPath = path.resolve(__dirname, '../certs/webpackcompiler.local.crt');

// Validate certs in dev
if (!isProduction && (!fs.existsSync(keyPath) || !fs.existsSync(certPath))) {
    throw new Error('❌ Key or Cert file missing.');
}

if (!isProduction) {
    console.log('Dev mode: Visit https://webpackcompiler.local:3000 — DO NOT use https://webpackcompiler.local directly.');
}


// Conditional CSS loader: style-loader for dev, MiniCssExtract for prod
const cssLoaders = isProduction
    ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    : ['style-loader', 'css-loader', 'postcss-loader'];


console.log('Using loaders:', cssLoaders.map(loader => typeof loader === 'string' ? loader : 'MiniCssExtractPlugin.loader').join(', '));


const lifecycle = process.env.npm_lifecycle_event;
// Plugins array
const plugins = [];

if (isProduction) {
    plugins.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
            ignoreOrder: true
        })
    );
} else {
    plugins.push(
        new BrowserSyncPlugin(
            {
                proxy: 'https://localhost:7238',
                host: 'webpackcompiler.local',
                port: 3000,
                https: {
                    key: keyPath,
                    cert: certPath
                },
                startPath: '/',
                open: isProduction ? false : 'external',
/*                open: 'external',*/
                files: [
                    path.resolve(__dirname, '../Views/**/*.cshtml'),
                    path.resolve(__dirname, '../wwwroot/js/**/*.js'),
                    path.resolve(__dirname, '../wwwroot/css/**/*.css')
                ],
                reloadDelay: 500
            },
            {
                injectCss: true,
                reload: false,
                callbacks: {
                    ready: function (err, bs) {
                        console.log('✅ BrowserSync is watching for .cshtml changes...');
                        bs.watch('../Views/**/*.cshtml').on('change', (file) => {
                            console.log(`🔁 .cshtml file changed: ${file}`);
                            bs.reload();
                        });
                    }
                }
            }
        )
    );
}
const outputPath = isProduction
    ? path.resolve(__dirname, '../../bin/Release/net8.0/publish/wwwroot')
    : path.resolve(__dirname, '../wwwroot');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'js/[name].min.js',

        path: outputPath,
        publicPath: '/',
        clean: true
    },
    devtool: isProduction ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins
};
