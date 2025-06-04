const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackBar = require('webpackbar');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isMeasuring = process.env.MEASURE === 'true';

// ✅ Create SMP wrapper
const smp = new SpeedMeasurePlugin();

// 🔧 CSS Loaders
const cssLoaders = isProduction
    ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    : ['style-loader', 'css-loader', 'postcss-loader'];

// 🔧 Plugins
const plugins = [
    new WebpackBar({ name: '🔧 Webpack Build' }),
];

if (isProduction) {
    plugins.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
            ignoreOrder: true
        })
    );
} else {
    //plugins.push(
    //    new BrowserSyncPlugin(
    //        {
    //            proxy: 'https://localhost:7238',
    //            host: 'webpackcompiler.local',
    //            port: 5026,
    //            https: {
    //                key: path.resolve(__dirname, '../certs/webpackcompiler.local.key'),
    //                cert: path.resolve(__dirname, '../certs/webpackcompiler.local.crt')
    //            },
    //            startPath: '/',
    //            open: 'external',
    //            files: [
    //                path.resolve(__dirname, '../Views/**/*.cshtml'),
    //                path.resolve(__dirname, '../wwwroot/js/**/*.js'),
    //                path.resolve(__dirname, '../wwwroot/css/**/*.css')
    //            ],
    //            reloadDelay: 500
    //        },
    //        {
    //            injectCss: true,
    //            reload: false,
    //            callbacks: {
    //                ready: (err, bs) => {
    //                    console.log('✅ BrowserSync watching .cshtml...');
    //                    bs.watch('../Views/**/*.cshtml').on('change', file => {
    //                        console.log(`🔁 Razor change detected: ${file}`);
    //                        bs.reload();
    //                    });
    //                }
    //            }
    //        }
    //    )
    //);
}

// ✅ Core Config
const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'js/[name].min.js',
        path: isProduction
            ? path.resolve(__dirname, '../../bin/Release/net8.0/publish/wwwroot')
            : path.resolve(__dirname, '../wwwroot'),
        publicPath: '/',
        clean: true
    },
    devtool: isProduction ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders,
            }
        ]
    },
    plugins,
};

// ✅ Wrap with SMP only if measuring
module.exports = isMeasuring ? smp.wrap(webpackConfig) : webpackConfig;
