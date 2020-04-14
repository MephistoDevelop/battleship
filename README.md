# Battleship JavaScript Game

> Project taken from Microverse Curriculum from [The Odin Page project Site](https://www.theodinproject.com/courses/javascript/lessons/battleship).

### Screenshot

![screenshot](./battleship.gif)

Javascript with Webpack project testes with Jest Library from [The Odin Project curriculum](https://www.theodinproject.com/courses/javascript/lessons/working-with-apis)

## Built With Javascript, Webpack, Jest Library

- Html,CSS,JavaScript
- Webpack
- npm manager
- Jest library

## Live Demo

[Live Demo Link](https://mephistodevelop.github.io/battleship/)

## Future Features

- Add level game from AI.
- 10 different random positon to Player and Computer.
- Images from ships to specific position
- Drag and drop feature

## Getting Started

### Prerequisites

-before running this project you will need to install before webpack and configure the live server on your webpac.config file. you can check more about it on this [page](https://webpack.js.org/guides/installation/).
[npm install and config: ](https://docs.npmjs.com/cli/install)

### Setup

run this commands to install webpack:

`npm install --save-dev webpack`
`npm install --save-dev webpack-cli`

To use this project you will need to download this repository and put it in on your computer.
after you will need to install a webpack and npm to run correctly this project.

in `package.json` file on the rules we are going to put this:

```
 "scripts": {
 "test": "jest-webpack",
 "build": "webpack --mode production",
 "builddev": "webpack --mode development",
 "start": "webpack-dev-server --mode development >--open"
 }
```

create a`webpack.config.js` file we are going to put this config to use live-sync browser reloaded automatly using `npm run start` :

```
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist'),
},
watch: true,
module: {
rules: [
{
test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
use: ['file-loader'],
},
],
},
};

module.exports = {
watch: true,
plugins: [
new BrowserSyncPlugin({
host: 'localhost',
port: 3001,
files: [
'./dist/*.html',
'./dist/*.js',
'./dist/*.css',
'./src/*.js',
'./src/img/*.jpg',
],
server: { baseDir: ['dist'] },
}),
],
};
```

### Deployment

To deploy the application and see it on the browser you can use npm to do that task on the server provider by webpack. to run the live server you will need to open your project folder terminal and run these commands:

```
npm install
npm i -D webpack-dev-server
npm i browser-sync --save
npm install --save-dev browser-sync-webpack-plugin
npm install --save-dev jest-webpack
npm run build

```

To Run the Linter files you will need to run these commands on the terminal :

```
`npm install eslint eslint-config-airbnb --save-dev`
`npx eslint --init`
`npx eslint`
```

after you will need to enter to [Stickler Page](https://stickler-ci.com/) and activate your repository.

To Run the Linter files you will need to run these commands on the terminal :

```
`npm install eslint eslint-config-airbnb --save-dev`
`npx eslint --init`
`npx eslint`
```

after you will need to enter to [Stickler Page](https://stickler-ci.com/) and activate your repository.

## Authors

👤 **Cristian Ines Hernandez A. - MephistoDevelop**

- Github: [@MephistoDevelop](https://github.com/MephistoDevelop)
- Twitter: [@MephistoDevelop](https://twitter.com/MephistoDevelop)
- Linkedin: [Cristian Hernandez](https://www.linkedin.com/in/cristian-hernandez1992/)

👤 **Ansar Yergeshov**

- Github: [@ansaryergesh](https://github.com/ansaryergesh)
- Twitter: [@ansaryergesh](https://twitter.com/ansaryergesh)
- Linkedin: [Ansar Yergeshov](https://www.linkedin.com/in/ansaryergesh/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give an ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
