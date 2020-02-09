```
cd leccion_03
php -S localhost:3000 -t leccion_03
```
## [Curso de CSS Grid layout](https://platzi.com/clases/css-grid-layout/)

### [Conceptos fundamentales sobre CSS Grid Layout](https://platzi.com/clases/1229-css-grid-layout/10073-conceptos-fundamentales-sobre-css-grids/)
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

  

