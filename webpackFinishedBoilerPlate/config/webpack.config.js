//module.exports = {
//    module: {
//        rules: [
//            {
//                test: /\.css$/,
//                use: [
//                    'style-loader',
//                    'css-loader',         // Turns CSS into CommonJS
//                    'postcss-loader'      // Processes with PostCSS (e.g., Tailwind, Autoprefixer)
//                ]
//            }
//        ]
//    }
//};


// Defaults
//webpack outputs the bundled files to a dist folder. If no configuration is provided, webpack assumes the entry point of your project is src/index.js and will output the result in dist/main.js. This behavior is configurable through the output property in your webpack configuration file (webpack.config.js).

// You don't need to setup a config if you use these paths:

//JS
// ./src/index.js

//CSS
// ./src/style.css

/*(3 loaders needed to compile)*/
//'css-loader', // Turns CSS into CommonJS
//'postcss-loader', // Processes with PostCSS (e.g., Tailwind, Autoprefixer)
// 'sass-loader' // Converts SCSS to CSS
// style loader is a way to inject inline styles onto the page



// Tools used

// Packages used:


//npx is a way to go get and run the most current version of the package or it will use your local one if you have that setup.


// this  injects the CSS into a < style > tag in the browser at runtime, instead of writing a main.min.css file. npm run build But npm run buildprod will extracts the CSS into a physical file:
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
console.log('Building in', isProduction ? 'PRODUCTION' : 'DEVELOPMENT', 'mode');

module.exports = {
    mode: isProduction ? 'production' : 'development',

    entry: path.resolve(__dirname, '../src/main.js'),

    output: {
        filename: 'js/[name].min.js',
        path: path.resolve(__dirname, '../wwwroot'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader', // must come before sass-loader
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        ...(isProduction
            ? [new MiniCssExtractPlugin({ filename: 'css/[name].min.css' })]
            : [])
    ],

    devtool: isProduction ? false : 'source-map',

    // ✅ HERE'S WHERE YOUR devServer GOES
    devServer: {
        port: 5026,
        hot: true,
        open: true,
        proxy: [
            {
                context: ['/'],
                target: 'https://localhost:44325',
                secure: false,
                changeOrigin: true
            }
        ],
        static: {
            directory: path.join(__dirname, '../wwwroot'),
            publicPath: '/'
        },
        devMiddleware: {
            publicPath: '/'
        }
    }
};

// this  injects the CSS into a < style > tag in the browser at runtime, instead of writing a main.min.css file. npm run build But npm run buildprod will extracts the CSS into a physical file:
////////const path = require('path');
////////const MiniCssExtractPlugin = require('mini-css-extract-plugin');

////////const isProduction = process.env.NODE_ENV === 'production';
////////console.log('Building in', isProduction ? 'PRODUCTION' : 'DEVELOPMENT', 'mode');

////////module.exports = {
////////    mode: isProduction ? 'production' : 'development',

////////    // Entry point: adjust if using src/styles/index.js
////////    entry: path.resolve(__dirname, '../src/index.js'),

////////    output: {
////////        filename: 'js/[name].min.js',
////////        path: path.resolve(__dirname, '../wwwroot'),
////////        clean: true, // clean old build files
////////    },

////////    module: {
////////        rules: [
////////            {
////////                test: /\.scss$/,
////////                use: [
////////                     MiniCssExtractPlugin.loader,
////////                    'css-loader', // Turns CSS into CommonJS
////////                    'postcss-loader', // Processes with PostCSS (e.g., Tailwind, Autoprefixer)
////////                    'sass-loader' // Converts SCSS to CSS
////////                ]
////////            }
////////        ]
////////    },

////////    plugins: [
////////         new MiniCssExtractPlugin({ filename: 'css/[name].min.css' })
////////    ],

////////    devtool: isProduction ? false : 'source-map',
////////};


//module.exports = {
//    entry: {
//        main: './src/js/main.js', // Your JS entry point
//        styles: './src/css/main.css' // Tailwind CSS entry
//    },
//    output: {
//        filename: 'js/[name].bundle.js',
//        path: path.resolve(__dirname, 'wwwroot'), // or Content/Scripts based on preference
//        clean: true, // clean old files on build
//    },
//    module: {
//        rules: [
//            // JavaScript and jQuery
//            {
//                test: /\.js$/,
//                exclude: /node_modules/,
//                use: 'babel-loader'
//            },

//            // Tailwind and CSS
//            {
//                test: /\.css$/,
//                use: [
//                    process.env.NODE_ENV !== 'production'
//                        ? 'style-loader'
//                        : MiniCssExtractPlugin.loader,
//                    'css-loader',
//                    'postcss-loader'
//                ]
//            },

//            // Images
//            {
//                test: /\.(png|jpe?g|gif|svg)$/i,
//                type: 'asset/resource',
//                generator: {
//                    filename: 'images/[name][hash][ext][query]'
//                }
//            },

//            // Webfonts
//            {
//                test: /\.(woff2?|eot|ttf|otf)$/,
//                type: 'asset/resource',
//                generator: {
//                    filename: 'fonts/[name][hash][ext][query]'
//                }
//            },

//            // CSHTML & HTML (processed only to copy to output if needed)
//            {
//                test: /\.(html|cshtml)$/,
//                use: 'raw-loader', // just imports them as string; no transformation
//                exclude: /node_modules/
//            }
//        ]
//    },
//    plugins: [
//        new MiniCssExtractPlugin({
//            filename: 'css/[name].css'
//        }),
//        new CopyWebpackPlugin({
//            patterns: [
//                {
//                    from: 'src/assets/images',
//                    to: 'images'
//                },
//                {
//                    from: 'src/assets/fonts',
//                    to: 'fonts'
//                }
//            ]
//        })
//    ],
//    resolve: {
//        extensions: ['.js']
//    },
//    devtool: isProduction ? false : 'source-map',
//    mode: isProduction ? 'production' : 'development'
//};