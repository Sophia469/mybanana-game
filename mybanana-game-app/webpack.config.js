const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Adicionar regras de módulos personalizados
  config.module.rules.push(
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images/',
          },
        },
      ],
    }
  );

  // Resolver extensões de arquivos
  config.resolve.extensions.push('.web.js', '.js', '.jsx', '.json');

  // Configuração do servidor de desenvolvimento
  config.devServer = {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 19006,
    open: true,
    historyApiFallback: true,
    hot: true,
  };

  return config;
};
