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
  - **nowrap**
    - Todos se ajustarían en la fila redimensionandose con misma longitud
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/568x176/488df5b97259c2192df81cf7625e1e98/image.png)
    - No respeta la longitud de 200 sino que es de 105
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/919x249/f6854a69a02ab31b26d34a4ea7774df7/image.png)
    - Por más que agreguemos divs hijos al contenedor el nowrap forzará que se ajusten en la linea horizontal, nunca pasarián a otra linea.
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/529x172/84b6db2973983564e0426e128f780f53/image.png)
- **flex-flow:** *atajo*, de flex-direction y flex-wrap
- **justify-content**
  - Nos permite decidir la distribucion de los hijos y la posición que tendrán
  - **flex-end**
    - Da la impresion que es como un row-reverse, pero no, los hijos respetan su orden solo que se desplazan a la derecha
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/485x179/fbdfdabc9112716587f345eeeb42c480/image.png)
  - **flex-start**
    - Situa los hijos de izquierda a derecha
- **justify-content**
  - Antes se usaba **margin: auto;** si esto no era suficiente habia que hacer mucha carpinteria con posiciones relativas, absolutas y left o right.
  - **center**
  - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/570x235/51378d2d48d467f49d5889348bed0c76/image.png)
  ```css
  justify-content: center;
  ```
  - **space-around**
    - distribuye los elementos a lo ancho dejando espacio entre ellos
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/581x114/41f8217a4a6dd5190c3419608dd5e4e1/image.png)
  - **space-between**
    - parecido al anterior solo que los hijos de los extremos estan adheridos al borde del padre
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/576x154/7a5df872e18779c5f13aa799bd6102e9/image.png)
    - Esto se puede aprovechar para el menu con el logo, serian dos "cuadrados" uno con cada función y el space-between los colocaria en los extremos
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/595x168/23ef3b74aeee11217247e387d3b67e0f/image.png)
- **align-items:**
  - **flex-start** posiciona los elementos en la zona "top" del contenedor
  - **flex-end** posiciona en el "bottom" del contenedor
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/562x266/c24d4b65e1cc2901a4e1f79356fce13f/image.png)
    - es como una posicón fija
    ```css
    .contenedor {
      justify-content: center;
      align-items: flex-end;
    }
    ```
    - **center** nos permite centrar en el eje vertical
    ```css
    posiciona en el punto medio del contenedor
    .contenedor {
      justify-content: center;
      align-items: center;
    }
    ```
    - **stretch** *conjuntamente con la altura de los hijos en auto*
      - Estira los hijos ocupando toda la altura del padre
      - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/570x261/30fed1639913e1fdba3f1784cbd1b263/image.png)
    - **baseline**
      - Baseline fuerza que la linea inferior de la fuente sea la misma para todos los hijos
      - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/517x137/aa43e8e69b49ad1e8667ae41474f9310/image.png)
- **align-content**
  - **center**
    - todos los hijos los agrupa en un bloque y los centra
- **align-items:center vs align-content:center**
  ```css
  .contenedor {
    align-items: center;
    align-content: center;
  }  
  ```
  - **items**
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/554x550/5858f1e1631a60594f5ce8ca3ea557fe/image.png)
  - **content**
    - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/551x553/cc0a952b0f284e70a36cb8c24c9bbe53/image.png)
  - **Nota importante!** Si tenemos más de una fila no podemos usar align-items tenemos que hacerlo con content
  ```css
  si usamos nowrap, seria una sola fila no haria caso a align-content con lo cual no se centraria nada
  .contenedor {
    flex-wrap: nowrap;
    justify-content: center; 
    /* align-items: center; */
    align-content: center; 
  }  
  ```
- Todo esto se puede utilizar para columnas: **contenedor: flex-direction:column;**
```css
.contenedor:{
  ...
  /*prefijos*/
  display: -webkit-flex;
  display: -ms-flexbox;
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
}
```
  - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/586x387/c2d8bef36b4ba4fbaaed59d5f93a64c9/image.png)
```css
.contenedor:{
  ...
  /*prefijos*/
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* align-content: center;  */ -> esto no tendria ningun efecto para esta configuración
}
```
  - ![](https://trello-attachments.s3.amazonaws.com/5e0a652ea6755b53d4b23009/595x401/a3c10073984b60de0a9cd0dba4778357/image.png)
