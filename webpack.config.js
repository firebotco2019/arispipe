const path = require('path');

			module.exports = {
        		entry: './src/app.js',
        		output: {
            		filename: 'bundle.js',
            		path: path.join(__dirname, 'dist'),
        		},
        		mode: "production",
        		module: {
            		rules: [
                		{
                    		test: /\.m?js$/,
                    		exclude: /node_modules/,
                    		use: {
                        		loader: "babel-loader",
                        		options: {
                            		presets: ['@babel/preset-env']
                        		}
                    		}
                		},
                        {
                            test: /\.css$/,
                            use: [
                             'style-loader',
                             'css-loader'
                            ]
                         }
            		]
        		}
    		}; 