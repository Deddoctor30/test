module.exports = {
   module: {
     rules: [
       {
         test: /\.s[ac]ss$/i,
         use: [
           // Creates `style` nodes from JS strings
           "style-loader",
           // Translates CSS into CommonJS
           "css-loader",
           // Compiles Sass to CSS
           "sass-loader",
         ],
       },
       {
         test: /\.css$/i,
         loader: "css-loader",
         options: {
           modules: true,
         },
       },
     ],
   },
 };