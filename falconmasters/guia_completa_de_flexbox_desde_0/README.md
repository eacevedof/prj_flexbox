## [Youtube - Guía Completa de Flexbox desde 0 by FalconMasters](https://www.youtube.com/watch?v=F-KCncXMPk0)

- **ejemplo en ejecución**
- [http://falconmasters.com/demos/layout_flexbox/](http://falconmasters.com/demos/layout_flexbox/)

### [Inicio](https://youtu.be/F-KCncXMPk0?t=578)
- Dejo todo html y css como en el ejemplo.
```css
body {background: #E9E9E9;}

.contenedor {
  width: 500px;
  height: 200px;
  background: #fff;
  padding: 10px;
  border: 10px solid #2C3E50;
  margin: 20px;
}

.elemento {
  color: #fff;
  margin: 5px;
  background: #E67E22;
  text-align: center;
}
```
```html
<div class="contenedor">
  <div class="elemento elemento1">1</div>
  <div class="elemento elemento2">2</div>
  <div class="elemento elemento3">3</div>
  <div class="elemento elemento4">4</div>
</div>
```
- ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/581x331/74fc4544d981ac564164674f4062f997/image.png)

#### cambio el ancho
```css
.elemento {
  color: #fff;
  margin: 5px;
  width: 50px;
  background: #E67E22;
  text-align: center;
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/565x266/1869d32c194426d18eb449812d639f33/image.png)
- Como hariamos para ponerals en horizontal?
  - Lo común es aplicar en **.elemento** `display:inline-block`, y funciona
  - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/321x156/754dee5ab733d75443cd6486c6f55317/image.png)
- Con flexbox ya no hace falta :) ~~*display:inline-block*~~
- Vamos a trabajar con el contenedor
- La primera y más importante propiedad es: **display:flex;**
```css
.contenedor {
  width: 500px;
  height: 200px;
  background: #fff;
  padding: 10px;
  border: 10px solid #2C3E50;
  margin: 20px;

  display:flex; tambíen podría haber sido inline-flex pero nunca se va usar
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/323x264/00be388fac8c882839890e5e19d21310/image.png)
#### prefijos
- Sirven para identificar como se aplicará el css según el navegador
```css
.contenedor {
  ...
  /*prefijos*/
  display: -webkit-flex;
  display: -ms-flexbox;
  display:flex;
}
```
- Como con **display:flex** ajusta el contenido (divs hijos) en linea pero ocupa todo el alto del contenedor (div padre) por eso ajustamos la altura de los hijos a 50px.
- ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/318x115/e34f7a808aa4432f6defe109d3b78d14/image.png)
- contenedor: 
  - **flex-direction**
  - acepta: row, column, row-reverse y column-reverse
  - row-reverse:
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/569x124/d18138e174af5401aa2d9ca6d542f566/image.png)
    - No los hace flotar a la derecha que es lo que se hace con float lo que pasa es que el 1 comienza de derecha a izquierda
  - column-reverse:
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/570x272/4f9127a81d2fbee38692d8d9646c953b/image.png)
  - **flex-wrap: wrap;**
    - Si tuviera los hijos con un ancho configurado que juntos superan el ancho del padre, por ejemplo el padre tien w:500px y cada hijo w:200 en total necesitarían un ancho de 800px sin contar margenes ni paddings.
    ```css
    .contenedor {
      width: 500px;
      height: 200px;
      ...
      /*prefijos*/
      display: -webkit-flex;
      display: -ms-flexbox;
      display:flex;

      flex-direction: row;
      flex-wrap: wrap;
    }
    ```
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/465x295/e9921a996dabaa97a815a0e5aa8f527e/image.png)
