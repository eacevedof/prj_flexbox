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
https://trello-attachments.s3.amazonaws.com/5e4021a455d6a4209892fa16/1061x274/0a4236f4890854cb13dd8f4a72877c5e/image.png
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
-

### [06 - ]()
-
### [07 - ]()
-
### [08 - ]()
-
### [09 - ]()
-
### [10 - ]()
-
### [11 - ]()
-
### [12 - ]()
-
### [13 - ]()
-
### [14 - ]()
-

