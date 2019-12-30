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
