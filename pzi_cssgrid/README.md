```
cd leccion_03
php -S localhost:3000 -t leccion_03
```
## [Curso de CSS Grid layout](https://platzi.com/clases/css-grid-layout/)

### [03 - Conceptos fundamentales sobre CSS Grid Layout](https://platzi.com/clases/1229-css-grid-layout/10073-conceptos-fundamentales-sobre-css-grids/)
-  Antes de css grid no existia ninguna estructura que nos permitiera crear cajas generales que forman el layout principal.
- Entonces llegó flex, pero este esta diseñado para montar elementos en linea o en columna
- Css grid layout permite recolocación de elementos de forma solapada o en forma de mosaico
- Pasar de 3 columnas a 2
- Link de refuerzo: https://css-tricks.com/snippets/css/complete-guide-grid
- Nueva propiedad: `{ display:grid;}`
- Tenemos dos elementos importantes:
  - **Grid container** y **Grid item**
  ```html
  <div class="container">
    <div class="item"></div>
    <div class="item">
      <p class="sub-item"></p> //hijo de item
    </div>
    <div class="item"></div>
  </div>
  ```
  - **Grid line**
    - Todos los bordes de las celdas
  - **Grid Track**
    - Espacio entre dos lineas adyacentes, filas y columnas
    - ![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/1002x620/01e21240996b0c45f67f1ac1b21695e8/image.png)    
  - **Grid cell**
    - Espacio entre dos filas y dos columnas adyacentes
  - **Grid area**
    - Espacio que esta rodeado por 4 grid lines
    - ![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/766x434/8c0ee95f87e070975b0257460c15ea21/image.png)
### [04 - Definiendo columnas](https://platzi.com/clases/1229-css-grid-layout/10074-definiendo-columnas/)
- Css grid es compatible con todos los navegadores
- **emmet** `.item{contenido #$}*12`
  - Crea 12 divs con `<div class="item">contenido #i</div>`
```html
<section class="container">
  <div class="item">contenido #1</div>
  <div class="item">contenido #2</div>
  <div class="item">contenido #3</div>
  <div class="item">contenido #4</div>
  <div class="item">contenido #5</div>
  <div class="item">contenido #6</div>
  <div class="item">contenido #7</div>
  <div class="item">contenido #8</div>
  <div class="item">contenido #9</div>
  <div class="item">contenido #10</div>
  <div class="item">contenido #11</div>
  <div class="item">contenido #12</div>
</section>
<style>
.container {
  display: grid;
}
</style>
```
- ![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/401x244/a615cb23ad5e35e76d3285d77d7880d9/image.png)
- Aplicando `grid-template-columns: 200px 200px 200px`
![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/1061x274/0a4236f4890854cb13dd8f4a72877c5e/image.png)
- Se puede hacer dinámico ``
```html
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  display: grid;
  grid-template-columns: 25% 200px 25%;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}
</style>
```
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/ad269457800d64e107eea8372adcd55d/image.png)

### [05 - Definiendo filas](https://platzi.com/clases/1229-css-grid-layout/10075-definiendo-filas/)
- `grid-template-rows: 300px 300px;`
- Hace que las dos primeras filas sean mucho más grandes que las restantes ya que entra en juego el concepto de grid explicito y grid implicito
- Implicito, lo que se asume por defecto
- Explicito. los extras
```css
.container {
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;
  /*template a secas substituye las otras*/
  grid-template: 300px 100px 100px / 25% 200px 25%;
}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/52e707998f249d5a726348acea0a25c3/image.png)

### [06 - Grids identados y tipos de displays](https://platzi.com/clases/1229-css-grid-layout/10076-grids-identados-y-tipos-de-displays/)
- ![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/1121x347/86609377db2dcbd1cbe181cd7b0cd01e/image.png)
```css
.container {
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;
  /*template a secas substituye las otras*/
  grid-template: 300px 100px 100px / 50% 200px 100px;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

/*nth: toma el cuarto elemento de tipo item*/
.item:nth-of-type(4){
  background: blue;
  overflow: auto;
  /*display: subgrid;  en un futuro existira y nos ahorramos repetir grid*/
  /*display: inline-grid;*/
  display:grid;
  grid-template: 50px 50px 50px / 200px 200px 200px;
}

.item .item {
  background: yellow;
}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/162cff07357debc3716d87ee148bf43e/image.png)

### [07 - Espaciado entre filas y columnas](https://platzi.com/clases/1229-css-grid-layout/10077-espaciado-entre-filas-y-columnas/)
- *Gap*
- Espaciado vertical: `margin-right`
- Espaciado horizontal: `margin-bottom: 10px;`
- Si bien los margenes permiten crear el espacio afectan al tamaño del contenedor
```css
.container {
  border: 1px solid purple;
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;
  /*template a secas substituye las otras*/
  grid-template: 300px 100px 100px / 50% 200px 100px;
  
  /*
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  - atajo de las dos anteriores
  grid-gap: filas x columnas*/
  grid-gap: 10px 100px;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
/*
  margin-right: 10px;
  margin-bottom: 10px;
*/
}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/2fa26bb13ab1df845db061c2598d39aa/image.png)

### [08 - Repetidores, unidades de medida y funciones](https://platzi.com/clases/1229-css-grid-layout/10078-repetidores-unidades-de-medida-y-funciones/)
- La diferencia entre **auto** y **fr** es que auto depende del ancho del contenido y si este tiene un overflow el padre crecería. fr es una fracción del ancho, es decir como un porcentaje
- funciones **repeat(), minmas()**
```css
.container {
  border: 1px solid purple;
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;
  /*template a secas substituye las otras*/
  grid-template: 300px 100px 100px / 1fr 1fr 1fr;
  /*crea 4 columnas de 1 proporcion, equivale a un ancho de 25%*/
  grid-template: 300px 100px 100px / repeat(4,1fr);
  /*cuatro columnas que se muevan entre 200px de minimo a 25% de máximo*/
  grid-template: 300px 100px 100px / repeat(4, minmax(200px, 1fr));
  /*primera columna minmax() y las siguientes 1fr*/
  grid-template: 300px 100px 100px / minmax(200px, 1fr) 1fr 1fr 1fr;
  grid-gap: 10px;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

/*nth: toma el cuarto elemento de tipo item*/
.item:nth-of-type(4){
  background: blue;
  overflow: auto;
  display:grid;
  grid-template: 50px 50px 50px / 200px 200px 200px;
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/c257a5a137a80b2279981cfdb9c5a75a/image.png)
### [09 - Definiendo áreas de contenido](https://platzi.com/clases/1229-css-grid-layout/10079-definiendo-areas-de-contenido/)
- grid-template-areas y grid-area
```css
.container {
  border: 1px solid purple;
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;
  /*primera columna minmax() y las siguientes 1fr*/
  grid-template: 100px 1fr 150px / 200px 1fr;
  grid-gap: 10px;
  height: 100vh;
  /*estos valores se podran usar asignar a posteriore a grid-area*/
  grid-template-areas: "header header"
                       "left contenido"
                       "footer footer"
  ;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

/*nth: toma el cuarto elemento de tipo item*/
.item:nth-of-type(4){
  background: blue;
  overflow: auto;
  display:grid;
  grid-template: 50px 50px 50px / 200px 200px 200px;
}

.item .item {
  background: yellow;
}

.header {
  grid-area:header;
}

.left{
  grid-area: left;
}
.contenido {
  grid-area:contenido;
}
.footer {
  grid-area: footer;
}
```
```html
<section class="container">
  <div class="item header">header</div>
  <div class="item left">left</div>
  <div class="item contenido">contenido</div>
  <div class="item footer">footer</div>
</section>  
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/38ac9146f5e5f6fd4bd1f6ce34e3b3c4/image.png)
### [10 - Definiendo el tamaño de las columnas dentro de un grid](https://platzi.com/clases/1229-css-grid-layout/10080-definiendo-el-tamano-de-los-columnas-dentro-de-un-/)
- El layout que queremos hacer:
  - ![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/806x754/f49ac32b6f061707e49d957c19dfe50e/image.png)
```css
.container {
  border: 1px solid purple;
  display: grid;
  
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  height: 100vh;
  /*estos valores se podran usar asignar a posteriore a grid-area*/
  grid-template-areas: "header header"
                       "left contenido"
                       "footer footer"
  ;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

/*nth: toma el cuarto elemento de tipo item*/
.item:nth-of-type(1){
  background: blue;
  grid-column-start: 1;
  /*el valor es el numero de linea donde acaba*/
  grid-column-end:3;
}

.item:nth-of-type(8){
  /*de la linea 1 hasta 2 columnas*/
  /* grid-column: 1 / span 2 ; */
  /*ocoupa de la linea 1 hasta la última*/
  grid-column: 1 / -1 ;
}

.item:nth-of-type(7){
  grid-column: 2 /4 ;
}
```
```html
<section class="container">
  <div class="item">item #1</div>
  <div class="item">item #2</div>
  <div class="item">item #3</div>
  <div class="item">item #4</div>
  <div class="item">item #5</div>
  <div class="item">item #6</div>
  <div class="item">item #7</div>
  <div class="item">item #8</div>
  <div class="item">item #9</div>
  <div class="item">item #10</div>
  <div class="item">item #11</div>
  <div class="item">item #12</div>
</section> 
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/d550bcec3e1cfa8679950c9ae223b558/image.png)

### [11 - Definiendo el tamaño de filas dentro de un grid](https://platzi.com/clases/1229-css-grid-layout/10081-definiendo-el-tamano-de-filas-dentro-de-un-grid/)
```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  border: 1px solid purple;
  display: grid;
  
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 5px;
  height: 100vh;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

.item:nth-of-type(1){
  grid-column:  1 / span 3;
  grid-row: 1 / span 2;
}

.item:nth-of-type(2){
  grid-column:  4 / span 2;
  grid-row: 1 / span 2;
}

.item:nth-of-type(3){
  grid-column:  6 / span 2;
}
```
```html
<div class="item">item #1</div>
<div class="item">item #2</div>
<div class="item">item #3</div>
<div class="item">item #4</div>
<div class="item">item #5</div>
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/20944864c93b5f93918215efc205a1a2/image.png)
### [12 - Definiendo el nombre de lineas](https://platzi.com/clases/1229-css-grid-layout/10082-definiendo-el-nombre-de-lineas/)
- renombrar los ids de lineas para que tenga valor semantico al ponerlas como limites
```css
.container {
  border: 1px solid purple;
  display: grid;
  
  grid-template-columns: [ci] 1fr [c1] 1fr [c2] 1fr [c3] 1fr [dest-end] 1fr [c5] 1fr [dest2-end] 1fr [c7] 1fr [cf];
  grid-template-rows: [fi] 200px [f2] 200px [ff];
  grid-gap: 5px;
  height: 100vh;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

/*nth: toma el cuarto elemento de tipo item*/
.item:nth-of-type(1){
  grid-column: ci / dest-end;
  grid-row: fi / ff

}

.item:nth-of-type(2){
  grid-column: dest-end / dest2-end;
  grid-row: fi / ff
}

.item:nth-of-type(3){
  grid-column: dest2-end / cf; 

}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/01e5d34174fa5628a69e45f9bf1770bc/image.png)

### [13 - Manejando el grid implícito](https://platzi.com/clases/1229-css-grid-layout/10083-manejando-el-grid-implicito/)
```css
.container {
  border: 1px solid purple;
  display: grid;
  
  grid-template-columns: [ci] 1fr [c1] 1fr [c2] 1fr [c3] 1fr [dest-end] 1fr [c5] 1fr [dest2-end] 1fr [c7] 1fr [cf];
  /* grid-template-rows: [fi] 200px [f2] 200px [ff]; */
  grid-gap: 5px;
  height: 100vh;
  /*por defecto es row*/
  /* grid-auto-flow: column; */
  /* grid-auto-columns: 50px 100px; */
  grid-auto-rows: 50px 100px;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}

/*nth: toma el cuarto elemento de tipo item*/
.item:nth-of-type(1){
  grid-column: ci / dest-end;
  grid-row: fi / ff

}

.item:nth-of-type(2){
  grid-column: dest-end / dest2-end;
  grid-row: fi / ff
}

.item:nth-of-type(3){
  grid-column: dest2-end / cf; 
```
```html
  <section class="container">
    <div class="item">item #1</div>
    <div class="item">item #2</div>
    <div class="item">item #3</div>
    <div class="item">item #4</div>
    <div class="item">item #5</div>

    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
    <div class="item">item #5</div>
  </section>  
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/2aea7d150667f258607824bee172c49b/image.png)

### [14 - Alineación de contenido](https://platzi.com/clases/1229-css-grid-layout/10084-alineacion-de-contenido/)
- se usa justify y align, existe el align-self
```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  border: 1px solid purple;
  display: grid;
  grid-gap: 5px;
  height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  justify-items: center;
  align-items: center;
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}
.item:nth-of-type(5){
  align-self:start;
  justify-self:start;
}
``` 
```html
<section class="container">
  <div class="item">item #1</div>
  <div class="item">item #2</div>
  <div class="item">item #3</div>
  <div class="item">item #4</div>
  <div class="item">item #5</div>
  <div class="item">item #6</div>
  <div class="item">item #7</div>
  <div class="item">item #8</div>
  <div class="item">item #9</div>
  <div class="item">item #10</div>
  <div class="item">item #11</div>
  <div class="item">item #12</div>
</section>  
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/23d2a06e07e96ad1963113a961934473/image.png)

### [15 - Alineación de filas y columnas](https://platzi.com/clases/1229-css-grid-layout/10085-alineacion-de-filas-y-columnas/)
- alineacion vertical y horizontal
```css
.container {
  border: 1px solid purple;
  display: grid;
  grid-gap: 5px;
  height: 100vh;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(4, 100px);
  /* justify-content: start end center stretch space-around space-between space-evenly; */
  justify-content: center; /*eje x*/
  align-content: center; /* eje y*/
}
.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid red;
}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/7e04d09760e26920d867d1884e459500/image.png)

### [16 - Layout de Instagram](https://platzi.com/clases/1229-css-grid-layout/10086-layout-de-instagram/)
```html
<style>
body{
  margin:0;
  font-family: Arial, Helvetica, sans-serif;

}
/*a.post*/
.post {
  cursor: pointer;
  position: relative;
  width: 200px;
  /*el ancla por defecto es inline, para que haga caso al width hay q cambiar a blok*/
  display: block;
}
.post-image {
  margin:0;

}
.post-image img {
  width: 100%;
  vertical-align: top;

}
.post-overlay {
  background: rgba(0,0,0,.4);
  position: absolute;
  left:0;
  right: 0;
  bottom: 0;
  top:0;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.post:hover .post-overlay {
  display: flex;
}

/*son spans*/
.post-likes,
.post-comments {
  width: 80px;
  margin: 5px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
}
</style>
</head>
<body>
  <section class="post-list">
    <a href="" class="post">
      <figure class="post-image">
        <img src="instagram/compu.jpg" alt="">
      </figure>
      <span class="post-overlay">
        <p>
          <span class="post-likes">150</span>
          <span class="post-comments">10</span>
        </p>
      </span>
    </a>
  </section>
</body>
</html>
``` 
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/8421ed5c3701c6b6fef285e30c4adea5/image.png)

### [17 - Terminando el Layout de Instagram](https://platzi.com/clases/1229-css-grid-layout/10087-terminando-el-layout-de-instagram/)
- Uso de mediaquery para ipad
```css
body{
  margin:0;
  font-family: Arial, Helvetica, sans-serif;

}
/*section.post-list*/
.post-list {
  display: grid;
  grid-template-columns: repeat(3,minmax(100px,293px));
  justify-content: center;
  grid-gap: 28px;
}

/*a.post*/
.post {
  cursor: pointer;
  position: relative;
  /*el ancla por defecto es inline, para que haga caso al width hay q cambiar a blok*/
  display: block;
}
.post-image {
  margin:0;

}
.post-image img {
  width: 100%;
  vertical-align: top;

}
.post-overlay {
  background: rgba(0,0,0,.4);
  position: absolute;
  left:0;
  right: 0;
  bottom: 0;
  top:0;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.post:hover .post-overlay {
  display: flex;
}

/*son spans*/
.post-likes,
.post-comments {
  width: 80px;
  margin: 5px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
}

/*medidas de ipad*/
@media screen and (max-width: with 768px){
  .post-list {
    grid-gap: 3px;
  }
}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/fe368e02dae79757dfe9fcde6527047e/image.png)

### [18 - Layout Masonry (Pinterest)](https://platzi.com/clases/1229-css-grid-layout/10089-layout-masonry-pinterest/)
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/5b1fb01c7cd15fdeffd1d6eb707c9b80/image.png)
- 
```html
<style>
.container {
  display: grid;
  /*
  auto-fill hace que sea responsive, 
  permite que se agregen a lo ancho las columnas que quepan
  */
  grid-template-columns: repeat(auto-fill,250px);
  grid-gap: 5px;
  justify-content: center;
}

.item {
  border-radius: 5px;
  padding: 10px;
  background: yellowgreen;
}
.item img {
  max-width: 100%;
}

.level-1 {
  /*le indica al div que ocupe 3 filas*/
  grid-row-end: span 3;
}

.level-2 {
  /*ocupa 2*/
  grid-row-end: span 2;
}

.level-3 {
  grid-row-end: span 1;
}
</style>
<div class="container">
  <div class="item level-1">
    <img src="pinterest/landing.jpg" alt="">
  </div>
  <div class="item level-2">
    <img src="pinterest/tshirt.webp" alt="">
  </div>
  <div class="item level-3">
    <img src="pinterest/house.jpg" alt="">
  </div>

  <div class="item level-1">
    <img src="pinterest/landing.jpg" alt="">
  </div>
  <div class="item level-2">
    <img src="pinterest/tshirt.webp" alt="">
  </div>
  <div class="item level-3">
    <img src="pinterest/house.jpg" alt="">
  </div>
  
  <div class="item level-1">
    <img src="pinterest/landing.jpg" alt="">
  </div>
  <div class="item level-2">
    <img src="pinterest/tshirt.webp" alt="">
  </div>
  <div class="item level-3">
    <img src="pinterest/house.jpg" alt="">
  </div>
  
  <div class="item level-1">
    <img src="pinterest/landing.jpg" alt="">
  </div>
  <div class="item level-2">
    <img src="pinterest/tshirt.webp" alt="">
  </div>
  <div class="item level-3">
    <img src="pinterest/house.jpg" alt="">
  </div>    
</div>
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/8e0300c415ebaa013850bc76f7f122ed/image.png)

### [19 - El landing de los cursos de Platzi](https://platzi.com/clases/1229-css-grid-layout/10088-el-landing-de-los-cursos-de-platzi/)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/6fc6ce1e18b87f653384de54b89f1864/image.png)
- Instalo fuente de googlefonts
![](https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/1144x849/10fc59ab007204816a2a1d01d8b53366/image.png)
```html
<style>
body {
  font-family: "Lato", sans-serif;
  margin:0;
}
.hero {
  background: #23475b;
  color: white;
  padding: 32px 15px;
}

.titulo {
  font-size:  36px;
  font-weight: normal;
  margin:0;
  display: flex;
  align-items: center;
}

.form {
  text-align: center;
  background: rgba(255,255,255, .9);
  padding: 1.5em;
  border-radius: 10px;
}

.form input{
  width: 100%;
  padding: 10ox;
  font-size: 16px;
  border: 1px solid #dbdbe2;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.form p{
  font-size: 20px;
  color: #3a3b3f;
  margin-bottom: 1em;
}

.form button {
  background: #98ca3f;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border:none;
  font-size: 16px;
  border-bottom: 5px solid #6d932b;
  display: inline-block;
}
</style>
<div class="hero">
  <div class="badge">
    <img src="images/badge.png" alt="">
  </div>
  <h1 class="title">
    Curso de React.js
  </h1>
  <div class="description">
    <p>
      React es una de las librerias más utilizadas ho en día podrás dominar la 
      creación de apps a través de un proyecto que te ayudará a explotar todas las 
      acapacidades de esta librería.
    </p>
  </div>
  <form action="" class="form">
    <p>Regístrate en Platzi</p>
    <input type="text" placeholder="Nombre">
    <input type="email" placeholder="Correo Electrónico">
    <button type="submit">Comienza ahora</button>
  </form>
  <div class="countdown">
    <p>Lanzamiento:</p>
    <p>
      <span>01d</span>
      <span>03h</span>
      <span>09m</span>
      <span>05s</span>
    </p>
  </div>
</div>
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/85d2a8c00af669699e8345c38a5d18dd/image.png)
### [20 - Terminando el landing de los cursos de Platzi](https://platzi.com/clases/1229-css-grid-layout/10091-terminando-el-landing-de-los-cursos-de-platzi/)
```html
<style>
body {
  font-family: "Lato", sans-serif;
  margin:0;
}
.hero {
  background: #23475b;
  color: white;
  padding: 32px 15px;
  display: grid;
  grid-template-columns: minmax(auto,1024px);
  justify-content: center;
}

.hero-container {
  display: grid;
  grid-template-columns: 70px 1fr 320px;
  /*configuración de las celdas*/
  grid-template-areas: "badge title form"
                       ". description form"
                       ". countdown form"
  ;
  grid-gap: 10px;
}

.badge {
  grid-area: badge;
}

.badge img {
  max-width: 70px;
}

.titulo {
  grid-area: title;
  font-size:  36px;
  font-weight: normal;
  margin:0;
  display: flex;
  align-items: center;
}

.form {
  grid-area: form;
  text-align: center;
  background: rgba(255,255,255, .9);
  padding: 1.5em;
  border-radius: 10px;
}

.form input{
  width: 100%;
  padding: 10ox;
  font-size: 16px;
  border: 1px solid #dbdbe2;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.form p{
  font-size: 20px;
  color: #3a3b3f;
  margin-bottom: 1em;
}

.form button {
  background: #98ca3f;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border:none;
  font-size: 16px;
  border-bottom: 5px solid #6d932b;
  display: inline-block;
}

.countdown {
  grid-area: countdown;
}

.countdown p {
  font-size: 20px;
  text-align: center;
  font-weight: 300;
}
.countdown span {
  font-size: 33px;
}

.countdown span:after {
  content: ":";
  display: inline-block;
  margin: 0.5px;
}

.countdown span:last-child::after{
  display: none;
}
p {
  margin: 0;
}
.description {
  grid-area: description;
}
@media screen and (max-width: 768px){
  .hero-container {
    grid-template-columns: 70px 1fr;
    /*dsitribución de las "celdas" */
    grid-template-areas:  "badge title"
                          "description description"
                          "form form"
                          "countdown countdown"
                        ;
  }
}
</style>
<div class="hero">
  <div class="hero-container">
    <div class="badge">
      <img src="images/badge.png" alt="">
    </div>
    <h1 class="title">
      Curso de React.js
    </h1>
    <div class="description">
      <p>
        React es una de las librerias más utilizadas ho en día podrás dominar la 
        creación de apps a través de un proyecto que te ayudará a explotar todas las 
        acapacidades de esta librería.
      </p>
    </div>
    <form action="" class="form">
      <p>Regístrate en Platzi</p>
      <input type="text" placeholder="Nombre">
      <input type="email" placeholder="Correo Electrónico">
      <button type="submit">Comienza ahora</button>
    </form>
    <div class="countdown">
      <p>Lanzamiento:</p>
      <p>
        <span>01d</span>
        <span>03h</span>
        <span>09m</span>
        <span>05s</span>
      </p>
    </div>
  </div>
</div>
```

![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e4021a455d6a4209892fa16/bb9feb5d88abdd7bbaf43de3d4d32643/image.png)

### [21 - Desafio](https://platzi.com/clases/1229-css-grid-layout/10092-desafio3419/)
-
### [22 - Conclusiones del Curso de CSS Grid Layout](https://platzi.com/clases/1229-css-grid-layout/10093-conclusiones-del-curso-de-css-grids/)
-

