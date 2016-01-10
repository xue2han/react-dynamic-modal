module.exports = {
  entry : './demo/bootstrap/app.jsx',
  output: {
    filename: 'bootstrap.js',
    path: './demo/build',
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
