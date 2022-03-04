# Webpack e Babel

Configurando um projeto reactjs do zero, usando webpack e babel

## Pacotes

Iniciar um projeto node com npm

```
npm init -y
```

Instalar os pacotes webpack,webpack-cli e webpack-dev-server

```
npm install webpack webpack-cli webpack-dev-server --save-dev
```

Criar arquivos

```
- index.html
- src/
- index.js
```

Adicionar os scripts de desenvolvimento e build ao package.json

```
"scripts":{
    "start":"webpack-dev-server --mode development --open --hot",
    "build":"webpack --mode production"
}
```

Instalar o react e react-dom

```
npm install react react-dom
```

Instalar o Babel para transpilar o codigo JSX para JS

```
npm install @babel/core @babel/preset-react babel-loader --save-dev
```

configurante o arquivo webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
```
