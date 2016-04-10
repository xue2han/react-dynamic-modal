module.exports = {
  entry : './src/app.jsx',
  output: {
    filename: 'main.js',
    path: 'build/',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  },
  resolve:{
   	  extensions : ["",".webpack.js", ".web.js", ".jsx",".js"]
  },
};
