## skeleton_002
- La intención es tener una plantilla básica y minificada para trabajar con cualquier módulo/libreria de js
- webpack-dev-server ofrece el **hotreload** lo que nos hace más productivo el desarrollo ya que no tenemos que recargar la página con cada cambio

## running
```js
//dentro de: skeleton_002

//ejecutar:

//lee la configuración en package.json para instalar todos los módulos 
//en este caso solo webpack
npm install  

//lee package.json scripts.start => webpack-dev-server --open --mode=development 
//lanza el servidor en el puerto 8080
npm run start 
``` 
- **módulos extra para webpack: js, css y assets**
- > **babel** npm install --save-dev babel-loader @babel/core @babel/preset-env
- > **sass** npm install --save-dev sass sass-loader postcss-loader css-loader
- > **postcss** npm install --save-dev autoprefixer cssnano
- > **MiniCssExtractPlugin** npm install --save-dev mini-css-extract-plugin
- > **file-loader** npm install --save-dev file-loader

- > Tamaño con node_modules: 
- ![](https://trello-attachments.s3.amazonaws.com/5dd13bb322fd19618bbe8e21/292x77/d30cbd1e41621b6113b72c68237db20c/image.png)
- > Tamaño sin node_modules: 
- ![](https://trello-attachments.s3.amazonaws.com/5dd13bb322fd19618bbe8e21/223x61/2a62aca2b4dfe0b28cb281c1f119caeb/image.png)

## 2019-11-17 13:21 SPAIN
- **package.json**
```js
"devDependencies": {
  "@babel/core": "^7.7.2",
  "@babel/preset-env": "^7.7.1",
  "autoprefixer": "^9.7.1",
  "babel-loader": "^8.0.6",
  "css-loader": "^3.2.0",
  "cssnano": "^4.1.10",
  "file-loader": "^4.2.0",
  "mini-css-extract-plugin": "^0.8.0",
  "postcss-loader": "^3.0.0",
  "sass": "^1.23.6",
  "sass-loader": "^8.0.0",
  "webpack": "^4.41.2",
  "webpack-cli": "^3.3.10",
  "webpack-dev-server": "^3.9.0"
},
```
- **index.css**
```css
/*index.css*/
.bold{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-style: italic;
}

.miclase {
  border: 1px solid green;
}

.miimagen {
  width: 50px;
  height: 50px;
}
```
- **index.js**
```js
//index.js
console.log("index.js loaded!")
import indexcss from "./index.css"
import icon from "./icon-demo.png"

document.addEventListener("DOMContentLoaded", objevt =>{ 
  console.log("indexcss:",indexcss)

  const eBody = document.getElementsByTagName("body")[0]
  const strtpl = `
  <div class="${indexcss.miclase}">
    <p class="${indexcss.bold}">Hello World !</p>
    <img src="${icon}" class="${indexcss.miimagen}"/>
  </div>
  ` 
  eBody.innerHTML = strtpl
})
```
- **index.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Webpack & Vanilla JS Skeleton 002</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <h1>Webpack & Vanilla JS Skeleton 002</h1>
  <script src="main.js"></script>
</body>
</html>
```

## notes
```js
ERROR in ./src/index.css 2:4

Module parse failed: Unexpected token (2:4)
You may need an appropriate loader to handle this file type, currently no loaders are 
configured to process this file. 
See https://webpack.js.org/concepts#loaders

| /*index.css*/
> body{
|   border:1px solid blue;
| }
 @ ./src/index.js 3:0-20

//solucionado con webpack.config.js y loaders
```