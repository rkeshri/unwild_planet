const path = require("path");
const HWP = require('html-webpack-plugin');
module.exports={
        entry: "./src/index.js",
        output: {
                path: path.join(__dirname, '/dist'),
                filename: 'bundle.js'
            },
        module:{
                rules:[
                        {
                                loader: 'babel-loader',
                                test:/\.js$|jsx/,
                                excludes:/node_module/,
                                // use:{
                                //         loader:'babel-loader'
                                // },
                        },
                ],
                plugins:[
                              new HWP(
                                   {template: path.join(__dirname,'/src/index.html')}
                              )
                           ]
        },

}