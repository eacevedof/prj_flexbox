### [Recurso: cssgridgarden](https://cssgridgarden.com/#es)

## [CSS Grid y Flexbox la guia definitiva](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/)

### Sección 2: Introducción y básicos de Flexbox 10 / 11|1 h 8 min
### [2. ¿Qué es Flexbox? 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268178#overview)
- 
### [3. El Contenedor Flex o Flex Container 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10267830#overview)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/545x329/b69d4c85e1b991b44a01a6bb8d236809/image.png)
- Despues de aplicar **display:flexbox;**
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/466x245/4359fa84f570fe6cc115e7635ac8a5e9/image.png)
- Siempre tiene que haber un padre sobre los elementos que quieras que sean *flexibles*
```css
body {
  box-sizing: border-box; /*el borde forma parte del contenido*/
  margin:0;
  background: #ff9966;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/*div-contenedor*/
.contenedor {
  
  background-color: white;
  height: calc( 100vh - 20px ); /*la altura de viewport - 20px*/
  max-width: 1000px;
  margin: 0 auto; /*top, right, bottom, left*/
  padding: 20px 30px 0 30px; /*se deja 20 de padding superior pq se resta -20px a la altura*/
}
.contenedor:hover{
  /*border:1px solid greenyellow;*/
}

/*fuentes y alineacion de h1:h2
h1: Aprendiendo flexbox
*/
h1, h2 {
  text-align: center;
  font-family: 'IBM Plex Serif', serif;
}

/*
servicio1  servicio 2 servicio 3
*/
h2 {
  color:white;
}

/*div fila y/o columna*/
.contenedor-flex {
  display: flex;
}

/*todos los elementos con padding 10 y color rojo*/
.elemento-flex {
  padding: 10px;
  background-color: #E53935;
}

/*al segundo elemento se le cambia el color*/
.elemento-flex:nth-child(2) {
  background-color: #8E24AA;
}

/*solo cambio de color*/
.elemento-flex:nth-child(3) {
  background-color: #3F51B5;
}
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e6740d738c3df87855fcc9b/ecad113350f92a551d9b6b42e2c3662a/image.png)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e6740d738c3df87855fcc9b/b3f246b62ac8c7f5e9189f90210d662a/image.png)

### [4. Flex Direction 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10277196#overview)
- Flex solo tiene la propiedad de organizar sus items como celdas en columna o celdas en fila
![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/497x361/bd054d12ec95085da49483de0829d9fc/image.png)
- Cssgrid puede ser en ambas
- *flex-direction* por defecto es row
  ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/621x249/5827faa6549193e8426a6b5506b23b7f/image.png)
  ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/463x551/3990422b980ddc3573cba27d939a0017/image.png)
- **display:inline-flex**
  ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/425x544/6e800afa41b40698173cb45b21b8bb09/image.png)
- Antes esto se emulaba con los *float* y seguidamente se tenía que limpiar **clear-both** antes de poner otro elemento. Con flex no hace falta
```css
/*div fila y/o columna*/
.contenedor-flex {
  /*display: flex; /*es el más común. el div se extiende por todo el ancho*/
  display: inline-flex; /*ajusta el contendido al ancho de la celda, no toma todo el espacio disponible*/
  /* display: inline-flex; /*el div hace wrap sobre el contenido*/
  border: 3px solid black;
  
  /*flex-direction: column;*/
  flex-direction: column-reverse;
}
```

### [5. Flex Wrap 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10267834#overview)
- Problema sin **flex-wrap:wrap**
  - ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/1100x223/13533ce8c23ce1706e2256af4b47d163/image.png)
- aplicando **flex-wrap:wrap**
  - ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/1049x375/c33ceb5d2c11ddd2ab585de369e79ad8/image.png)
- El flex-wrap no tiene mucha utilidad con flex-direction:column
- Tiene su variante, flex-wrap:wrap-reverse
- **Atajo**: `flex-flow: <row|row-reverse|column|column-reverse> <wrap | wrap-reverse>`
- Es equivalente a:
  ```css
    flex-wrap:wrap;
    flex-direction:row;
  equivalente: 
    flex-flow:row wrap;
  ```
```css
.contenedor-flex {
  display: flex; /*es el más común. el div se extiende por todo el ancho*/
  /*display: inline-flex; /*ajusta el contendido al ancho de la celda, no toma todo el espacio disponible*/
  /* display: inline-flex; /*el div hace wrap sobre el contenido*/
  border: 3px solid black;
  
  /*flex-direction: column;*/
  /*flex-direction: column-reverse;*/
  /*flex-direction:row;*/
  /*flex-wrap: wrap; /*si se sale del ancho del contenedor  con wrap se obliga al salto de linea*/
  flex-flow: row wrap;
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/469x553/3233b07429c90c7259d0ea62d8c1605f/image.png)

### [6. Flex Flow y Order 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268006#overview)
- Se puede sobrescribir el orden por defecto de los items
- Para esto se usa en la css del item la propiedad order:
```css
.elemento-flex{
  padding: 10px;
}

/*todos los elementos con padding 10 y color rojo*/
.elemento-flex:nth-child(1) {
  background-color: #E53935;
}

/*al segundo elemento se le cambia el color*/
.elemento-flex:nth-child(2) {
  order:1;
  background-color: #8E24AA;
}

/*solo cambio de color*/
.elemento-flex:nth-child(3) {
  order:2;
  background-color: #3F51B5;
}

/*media query
si el ancho visible del body es >=768 el servicio 3 pasa a ser el primero
*/
@media screen and (min-width:768px){
  .elemento-flex:nth-child(3) {
    order:-1;
    background-color: green;
  }
  .elemento-flex:nth-child(2) {
    order:3;
    background-color: rgb(95, 69, 243);
  }  
}
```
![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/740x477/3d4be0efa28c3e6c819af7093a0685e1/image.png)

### [7. Flex Grow, Flex Shrink, Flex Basis y el Shorthand Flex 9 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268018#overview)
- Bootstrap usa flexbox y usa flex-basis para definir el ancho
```css
.elemento-flex{
  padding: 10px;
  /*flex-grow: 1; /*indica la proporcion de crecimiento siempre que sobre espacio*/
  /* Flex: toma 3 parametros: <flex-grow> <flex-shrink> <flex-basis>*/
  flex: 1 0 auto
}

/*todos los elementos con padding 10 y color rojo*/
.elemento-flex:nth-child(1) {
  background-color: #E53935;
}

/*al segundo elemento se le cambia el color*/
.elemento-flex:nth-child(2) {
  background-color: #8E24AA;
  /*flex-grow: 2; /* hace crecer el elemento*/
  /*flex-grow: 0; /*desactiva el crecimiento*/
  /*flex-shrink: 0; /*fuerza a que mantenga su tamaño siempre*/
  /*flex-basis: 50%; /*el minimo en shrink*/
}

/*solo cambio de color*/
.elemento-flex:nth-child(3) {
  background-color: #3F51B5; 
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/724x228/0f89d9e6582e7c5f4c79bd0382c3b490/image.png)

### [8. Flex Grow y flex a fondo 12 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/11558638#overview)
```css

.contenedor {
  /*solo afecta a main y aside*/
  border:1px solid black; /*guia*/
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

/*
flex: en los hijos le indica a la "celda" cuanto tiene que ocupar
main.nosotros y side.sidebar
1+1 = 2 => max-witdh /2 = 500px

con el mediaquery le indicamos que si es mayor a 768 (hay espacio para 2 cols) entonces se aplique la proporcion
*/
@media (min-width:768px){
  .nosotros{
    /*flex:7;*/
    /*flexgrow(proporcion de crecimiento), flex-shrink(fuerza base siempre), flex-base(minimo siempre);*/
    flex: 0 0 70%;
  }

  .sidebar{
    /*flex:3;*/
    flex: 0 0 30%;
  }
}

.servicios{
  display: flex;
  flex-wrap: wrap;
}

.servicio{
  /*los items ocuparan todo el ancho siempre y cuando el ancho sea <768*/
  background-color: cornflowerblue;
  flex: 0 0 100%;
}

.doble{
  background-color: bisque;
}


@media (min-width:768px){
  .servicio{
    flex:1;
  }

  .doble{
    flex:2!important;
  }
}
```

```html
  <div class="contenedor">
    
    <main class="nosotros">
      <h2>Sobre nosotros</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Sunt amet sint et voluptatem ad eum ipsum asperiores aspernatur 
        nulla tenetur, aliquid magnam dignissimos aliquam sequi quae facilis 
        exercitationem porro! Asperiores?
      </p>

      <h3>Servicios</h3>
      <div class="servicios">
        <div class="servicio">
          <h3>Servicio 1</h3>
        </div>
        <div class="servicio doble">
          <h3>Servicio 2</h3>
        </div>
        <div class="servicio">
          <h3>Servicio 3</h3>
        </div>  
      </div>
      
    </main>

    <aside class="sidebar">
      <h2>Contenido Lateral</h2>
    </aside>
  </div>
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/1018x601/ac8edc237cba876bb5dd7c6d3e29a53a/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/473x788/5129b328b13b557f6fbca53cc60fcde9/image.png)

### [9. Alineando con Flexbox 9 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268028#overview)
- justify-content alineación horizontal
- align-items alineacion vertical
- align-self alineacion del item
```css
.contenedor-flex {
  /* display:inline-flex; */
  display: flex;
  border: 3px solid black;

  flex-direction: row;
  flex-wrap: wrap-reverse;
  flex-flow: row wrap;
  /*
  indica que se renderizarán los items de izquierda a derecha
  es equivalente a float-left y flex-end a float-right, center sería margin:0 auto;
  */
  justify-content: flex-start;
  justify-content: center; /*centra*/
  justify-content: space-around; /*centra crea margin entre los items*/
  justify-content: space-between; /*usado en bootstrap y foundation*/

  height: 400px;
  align-items: flex-start;
  align-items: flex-end;
  align-items: baseline;
  align-items: center;
}

.elemento-flex {
  padding: 10px;
  background-color: #E53935;
  
}
.elemento-flex:nth-child(1) {
  background-color: red;
  align-self: flex-start;
}

.elemento-flex:nth-child(2) {
  background-color: #8E24AA;
}

.elemento-flex:nth-child(3) {
  background-color: #3F51B5;
  align-self: flex-end;
  align-self: stretch;
}
```
```html
  <div class="contenedor">

    <h1>Aprendiendo Flexbox</h1>

    <div class="contenedor-flex">
      <div class="elemento-flex elemento-1">
          <h2>Servicio 1</h2>
      </div>
      <div class="elemento-flex elemento-2">
          <h2>Servicio 2</h2>
      </div>
      <div class="elemento-flex elemento-3">
          <h2>Servicio 3 un poco mas de contenido</h2>
      </div>
      <div class="elemento-flex elemento-3">
          <h2>Servicio 3</h2>
      </div>
    </div>

  </div>
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/465x479/e881cb08331cbda71b49a63710d9c8c9/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/883x468/c4caf5e9e59ee1eb898c5d0777c69645/image.png)

### [10. Poniendo todo en práctica (Video 1 de 3) 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268036#overview)
```css
/*
<header class="header-sitio">
  <h1>  
  <nav>
*/
.header-sitio {
  border: 1px solid black;
  background-color: #03A9F4;
  padding:0 20px;
  /* Flex aqui*/
  display: flex;
  /*para tamaños menores a 768 se muestra en columna*/
  flex-direction: column;
}


@media screen and (min-width:768px) {
  .header-sitio {
    /*si es >768 se muestra como fila*/
    flex-direction: row;
    justify-content: space-between;
  }
}

.header-sitio h1 {
  color:white;
}

nav {
  /*esto hace que el navbar se ponga a la altura del h1*/
  align-self: center;
}
```
```html
<header class="header-sitio">
  <h1>Nombre Sitio</h1>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Nosotros</a>
    <a href="#">Servicios</a>
    <a href="#">Portafolio</a>
    <a href="#">Contacto</a>
  </nav>
</header>
``` 
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e6740d738c3df87855fcc9b/adfcd6ed39a0d6d064c8dcb161b081e0/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/477x198/9ba24ae0c0da2399a231eabf2a1ef5dd/image.png)

### [11. Poniendo todo en práctica (Video 2 de 3) 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268060#overview)
```css
/*
<main class="contenedor-flex">
  <principal>
  <aside>
*/
.contenedor-flex {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  
}

@media screen and (min-width:768px) { 
  .contenedor-flex {
    flex-direction: row; 
  }
}

.principal {
  order: 2; /*la caja de los servicios por defecto al final*/
}
aside {

}

aside {
  background-color: #03A9F4;
  margin-bottom: 1rem;
}


@media screen and (min-width:768px) {
  .principal {
    /*no quiero que crezca pero si shrink con un min de 60%*/
    flex:0 1 60%;
    margin-right: 20px;
    order: unset; /*la caja de los servicios si cabe al prinpicpio*/
  }
  aside {
    /*el aside crecerá (flex grow) y tomará el espacio restante*/
    flex:1;
  }
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/768x257/bce83f067bf532ceb5a76bfe6e9bff20/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/451x337/cf77a739465d61dee102c1db8c39dbb9/image.png)

### [12. Poniendo todo en práctica (Video 3 de 3) 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268062#overview)
```css
/*
<div class="servicios">
  <servicio n>
*/
.servicios {
  display: flex;
  flex-direction: column;
}
/*<servicio n>*/
.servicios .servicio {
  
}
@media screen and (min-width:768px) {
  .servicios {
    display: flex;
    flex-direction: row;
  }

  .servicios .servicio {
      flex:1 /*hace que ocupe toda la fila*/
  }
}

.servicio {
  padding: 5px;
  background-color: #E53935;
}


.servicio:nth-child(2) {
  background-color: #8E24AA;
}

.servicio:nth-child(3) {
  background-color: #3F51B5;
}

footer {
  height: 100px;
  background-color: #8E24AA;
  margin-top: 20px;
  display: flex;
  /*alineacion vertical y horizontal del parrafo*/
  justify-content: center;
  align-items: center;
}
footer p {
  color: white;
}
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/827x399/5ea56b1920a002071e540124e2c5a403/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/461x680/f61286c8b2b41895761f36d996b98edc/image.png)

### Sección 3: PROYECTO: Diseño de tipo Cards en Flexbox 0 / 3|16 min
### [13. Arrancando el Proyecto 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268074#overview)
- **El proyecto**
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e6740d738c3df87855fcc9b/a7079ee734ca3c91eb9545ba4ef33db8/image.png)
- `/*cuando agregemos padding no afecte el ancho de nuestros elementos*/
  box-sizing: border-box;`
```css
body {
  /*cuando agregemos padding no afecte el ancho de nuestros elementos*/
  box-sizing: border-box;
  background-color: #f2f2f2;
}

.contenedor{
  max-width: 1100px;
  margin: 0 auto;
}

/*todas las imagenes*/
img {
  /* son responsivas */
  max-width: 100%;
}

h2 {
  flex:0 1 100%/*para que no crezca*/
}

/*
<main class="contenido-principal">
  <h2>
  <article>
*/
.contenido-principal{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*align-items: center;**/
}

@media (min-width:768px){
  .contenido-principal{
    flex-direction: column;
  }
}
```
### [14. Agregando Media Queries a los Cards 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269018#overview)
```css
@media screen and (min-width:480px){
  /*
  <main class="contenido-principal">
    <h2>
    <article>
  */
  .contenido-principal{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*align-items: center;**/
  }
  /*
  <article>
    <img>
    <div>
  */
  .entrada {
    /*
    a cada article se le configura un ancho de 50 - 1rem 
    si no pusiera 1rem no se mostraría padding
    se mostrarán 2 cajas 
    */
    flex: 0 1 calc(50% - 1rem);
  }

}/*media 480*/

@media screen and (min-width:768px){

  .entrada {
    /*
    esto hace que se muestren 3 cajas
    */
    flex: 0 1 calc(33% - 1rem);
  }

}/*media 768px*/
```
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e6740d738c3df87855fcc9b/72d23fcbc35e8332132901a716d0d32e/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/480x651/33cdd84be9054784a85a424470374cd6/image.png)

### [15. Estilos a los cards 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269652#overview)
```css
body {
  /*cuando agregemos padding no afecte el ancho de nuestros elementos*/
  box-sizing: border-box;
  background-color: #f2f2f2;
}

.contenedor{
  max-width: 1100px;
  margin: 0 auto;
}

/*todas las imagenes*/
img {
  /* son responsivas */
  max-width: 100%;
}

h2 {
  flex:0 1 100%;/*para que no crezca*/
  /*border: 1px solid red;*/
  text-align: center; /*
  este elmento ocupa toda la linea y con align-center se centra
  centrar título
  */
  font-size: 1.6rem;
}
h3 {
  font-family: "Libre Baskerville", serif;
  margin:0;
  font-weight: 700;
}

@media screen and (min-width:480px){
  /*
  <main class="contenido-principal">
    <h2>
    <article>
  */
  .contenido-principal{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*align-items: center;**/
  }
  /*
  <article>
    <img>
    <div>
  */
  .entrada {
    /*
    a cada article se le configura un ancho de 50 - 1rem 
    si no pusiera 1rem no se mostraría padding
    se mostrarán 2 cajas 
    */
    flex: 0 1 calc(50% - 1rem);
  }

}/*media 480*/

@media screen and (min-width:768px){

  .entrada {
    /*
    esto hace que se muestren 3 cajas
    */
    flex: 0 1 calc(33% - 1rem);
  }

}/*media 768px*/

/*
<article>
  <div.contenido>
    h3
    p
    a
*/
.contenido {
  background-color: #fff;
  margin-bottom: 1rem;
  padding:1rem;
  text-transform: uppercase; /*a mayúsculas*/
  text-align: center; /*
  centra los elementos
   h3,p y a
  */
}

.contenido h3{
  text-align: center; /*se centra el título*/
  font-size: .9rem;
  line-height: 1.4rem; /*altura de la linea del texto*/
}

.contenido span{
  color: #db008d
}

/*
<a>Leer más<a/>
*/
.boton {
  background-color: #008fd1;
  color: #fff;
  padding: .8rem 3rem;
  margin-top: 1rem; 
  /*
  esta separación no funciona por si sola ya que los <a> usan por defecto el display:inline
  si lo dejo como block ocuparía toda la fila y el texto no estaria centrado
  como inline-block emularia a un bloque de texto en una linea
  */
  display: inline-block;
  text-decoration: none; /*quito el subrayado*/
  align-self: center;
}
```
```html
<div class="contenedor">
  <main class="contenido-principal">
    
    <h2>Últimas Entradas</h2>

    <article class="entrada">
        <img src="img/01.jpg" alt="texto entrada">
        <div class="contenido">
            <h3>Tips para viajar con poco presupuesto</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="#" class="boton"> Leer más</a>
        </div>
    </article>
    <article class="entrada">
        <img src="img/02.jpg" alt="texto entrada">
        <div class="contenido">
            <h3>Todo lo necesario para tu viaje</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="#" class="boton"> Leer más</a>
        </div>
    </article>
    <article class="entrada">
        <img src="img/03.jpg" alt="texto entrada">
        <div class="contenido">
            <h3>El equipo necesario para tomar las mejores fotografías</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="#" class="boton"> Leer más</a>
        </div>
    </article>
    <article class="entrada">
        <img src="img/04.jpg" alt="texto entrada">
        <div class="contenido">
            <h3>Checklist para tu próximo viaje</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="#" class="boton"> Leer más</a>
        </div>
    </article>
    <article class="entrada">
        <img src="img/05.jpg" alt="texto entrada">
        <div class="contenido">
            <h3>Los mejores lugares para visitar este otoño</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="#" class="boton"> Leer más</a>
        </div>
    </article>
    <article class="entrada">
        <img src="img/06.jpg" alt="texto entrada">
        <div class="contenido">
            <h3>Los mejores lugares para visitar con montañas</h3>
            <p>Publicado el: <span>19 Julio, 2018</span></p>
            <p>Por: <span>Blog Viajes</span></p>
            <a href="#" class="boton"> Leer más</a>
        </div>
    </article>

  </main>

</div><!--.contenido-->
```
![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/460x861/8baf80735c752df82d8dbf7458093978/image.png)
### Sección 4: Creando Menús de Navegación con Flexbox 0 / 6|35 min
### [16. Creando un Menú Sencillo 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269656#overview)
```css
body {
    box-sizing: border-box;
    margin:0;
    background: #ff9966;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: 'IBM Plex Serif', serif;
}

/*
<contenedor>
  h1{Menu Sencillo}
  nav.sencillo
  h2
  nav.iconos
  h2
  nav.dropdown
  ..
*/
.contenedor {
  background-color: white;
  min-height: calc( 100vh - 20px );
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 30px 0 30px;
}

nav {
  background-color: #3F51B5;
}
nav ul {
  list-style:none;
  margin:0;
  padding:0;
}
nav ul li {
  padding: 20px;
}
nav ul li:hover {
  background-color: #1a2770;
}
nav ul a {
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
}

/*
nav.sencillo
*/
.sencillo ul{
  display: flex;
  justify-content: space-between; 
  flex-direction: column;
}

.sencillo ul li{
  text-align: center;
  margin-bottom: .5rem;
}

@media screen and (min-width:768px){
  .sencillo ul{
    flex-direction: row;
  }
  .sencillo ul li {
    margin-bottom: 0;
  }
}
```
```html
<div class="contenedor">
  <h1>Menú Sencillo</h1>
  <nav class="sencillo">
    <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Tienda Virtual</a></li>
        <li><a href="#">Asistencia</a></li>
    </ul>
  </nav>
</div>
```
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e6740d738c3df87855fcc9b/fe1e7be53310a77907e2af6b40a27ec0/image.png)
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/445x504/9394b63a08845c7e04d22ade0e987623/image.png)

### [17. Creando un Menú con Iconos (Pt 1 de 2) 7 min]](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269668#overview)
- [fontawesome icons](https://fontawesome.com/icons?d=gallery)
```html
<h2>Con Iconos</h2>
<nav clas="iconos">
  <ul>
    <li>
      <a href="#">
        <div class="icono">
          <i class="fas fa-home"></i>
        </div>
        <div class="texto">
          Inicio
          <span>Página principal</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="icono">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="texto">
          Contacto
          <span>Escribenos aqui</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="icono">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="texto">
          Tienda Virtual
          <span>Adquiere nuestros artículos</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="icono">
          <i class="fas fa-question"></i>
        </div>
        <div class="texto">
          Asistencia
          <span>Necesitas ayuda?</span>
        </div>
      </a>
    </li>
  </ul>
</nav>
```
- ![](https://trello-attachments.s3.amazonaws.com/5e6740d738c3df87855fcc9b/454x438/9794f0a2fa120da983874d9f99401223/image.png)



### [18. Creando un Menú con Iconos (Pt 2 de 2) 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269704#overview)
- 
### [19. Creando un Dropdown Menu 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269708#overview)
- 
### [20. Creando un Menú de Redes Sociales 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269720#overview)
- 
### [21. Creando un Menú de Redes Sociales y Dropdown 3 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269722#overview)
- 
### Sección 5: PROYECTO: Sitio Web de Cursos 0 / 16|1 h 24 min
### [22. ¿Porque usar Autoprefixr? 3 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269726#overview)
- 
### [23. Instalando Dependencias 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15435242#overview)
- 
### [24. Compilando SASS con Gulp 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15435246#overview)
- 
### [25. Agregando un watch 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15435248#overview)
- 
### [26. Comenzando los estilos del Proyecto 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270136#overview)
- 
### [27. Estilos al carrito de compras con SASS 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270138#overview)
- 
### [28. Agregando una fuente de Google Fonts 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270140#overview)
- 
### [29. Creando un Mixin 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270142#overview)
- 
### [30. Creando otros mixins útiles 2 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270144#overview)
- 
### [31. Creando la imagen principal y buscador 8 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270146#overview)
- 
### [32. Creando mixins para media queries 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270150#overview)
- 
### [33. Creando la barra principal 8 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10270166#overview)
- 
### [34. Creando la sección de los cursos 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10276388#overview)
- 
### [35. Finalizando la sección de los cursos 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10276392#overview)
- 
### [36. Creando el footer 2 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10276394#overview)
- 
### [37. Creando los menús del footer 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10276400#overview)
- 
### Sección 6: PROYECTO: Login de Netflix con SASS, Gulp y Flexbox 0 / 17|1 h 36 min
### [38. Primeros pasos con el Proyecto 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15433902#overview)
- 
### [39. Compilando SASS con Gulp 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15433910#overview)
- 
### [40. Agregando un watch 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15433916#overview)
- 
### [41. Creando e importando las Variables 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15433940#overview)
- 
### [42. Creando e Importando Mixins 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15433942#overview)
- 
### [43. Escribiendo el HTML del login 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434046#overview)
- 
### [44. CSS al Body 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434052#overview)
- 
### [45. CSS al Logo 2 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434054#overview)
- 
### [46. Primeros pasos con el formulario 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434092#overview)
- 
### [47. CSS a los inputs 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434094#overview)
- 
### [48. Animando el Label cuando vamos a escribir en el formulario 3 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434134#overview)
- 
### [49. Creando el botón de Iniciar Sesión 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434188#overview)
- 
### [50. Finalizando el formulario 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434230#overview)
- 
### [51. CSS al Footer 9 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434272#overview)
- 
### [52. Validación del Formulario 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434276#overview)
- 
### [53. Agregando clases y mensajes de error 11 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434284#overview)
- 
### [54. Agregando un botón de ocultar / mostrar en el password 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/15434290#overview)
- 
### Sección 7: PROYECTO: Diseño de un Blog 0 / 8|44 min
### [55. Arrancando el Proyecto 4 min]()
- 
### [56. Trabajando con la imagen principal 8 min]()
- 
### [57. Estilos al Header 4 min]()
- 
### [58. Estilos al Menú Principal 7 min]()
- 
### [59. Creando la sección de categorias 5 min]()
- 
### [60. Estilos a las categorías 8 min]()
- 
### [61. Creando el footer 3 min]()
- 
### [62. Estilos al footer y fin 6 min]()
- 
### Sección 8: PROYECTO: Holy Grail Layout o Layout de 1 o 2 columnas … 0 / 3|21 min
### [63. Introducción al Proyecto 6 min]()
- 
### [64. Creando la navegación Principal 6 min]()
- 
### [65. Agregando los Sidebars 8 min]()
- 
### Sección 9: Otros diseños en Flexbox 0 / 5|35 min
### [66. Creando el Media object o comentarios con fotografia 7 min]()
- 
### [67. Diseño con Footer fijo abajo 7 min]()
- 
### [68. Diseño con elementos en distinta alineación 6 min]()
- 
### [69. Finalizando el diseño 5 min]()
- 
### [70. Creando un Diseño Masonry en Flexbox 10 min]()
- 

### Sección 10: PROYECTO: AdminFlex o Panel de Administración en Flexbox 0 / 13|1 h 10 min
### [71. Arrancando el Proyecto 3 min]()
- 
### [72. Creando el Header 2 min]()
- 
### [73. Primeros estilos al Proyecto 3 min]()
- 
### [74. Creando la barra superior 4 min]()
- 
### [75. Estilos al Nombre del sitio 4 min]()
- 
### [76. Estilos a la barra superior 4 min]()
- 
### [77. Estilos a los menús 4 min]()
- 
### [78. Creando la barra lateral 6 min]()
- 
### [79. Estilos al buscador 6 min]()
- 
### [80. Estilos al Menú Lateral 8 min]()
- 
### [81. Ocultando y mostrando el Menú Principal 15 min]()
- 
### [82. Estilos al área principal 3 min]()
- 
### [83. Creando los formularios 8 min]()
- 
### Sección 11: Introducción a CSS Grid 0 / 13|1 h 28 min
### [84. ¿Qué es CSS Grid? y términos básicos 4 min]()
- 
### [85. El Grid Container 14 min]()
- 
### [86. Definiendo columnas y rows 6 min]()
- 
### [87. Colocando elementos dentro de los rows y columns 6 min]()
- 
### [88. Grid Shorthand, grid-row, grid-column, grid-area 6 min]()
- 
### [89. Repeat en CSS Grid 4 min]()
- 
### [90. Grid Template Areas 9 min]()
- 
### [91. Grid Template Areas en práctica 4 min]()
- 
### [92. Modificar el orden de los elementos según la resolución con Grid 7 min]()
- 
### [93. Grid FR, Repeat y otras opciones disponibles 7 min]()
- 
### [94. Alineación en Grid 5 min]()
- 
### [95. Creando un Diseño Experimental con Grid 10 min]()
- 
### [96. Grid Auto-fit y Auto-fill 8 min]()
- 
### Sección 12: PROYECTO: Blog de Recetas en CSS Grid 0 / 2|12 min
### [97. Arrancando el Proyecto 10 min]()
- 
### [98. Finalizando el Proyecto ¿Sorprende no? :D 2 min]()
- 
### Sección 13: PROYECTO: Sitio Web de Bienes Raices con CSS Grid 0 / 11|50 min
### [99. Arrancando el Proyecto 3 min]()
- 
### [100. Creando y utilizando variables CSS 7 min]()
- 
### [101. Creando la barra del header 4 min]()
- 
### [102. Agregando Fuentes de Google Fonts 2 min]()
- 
### [103. Creando la sección de Nosotros 1 min]()
- 
### [104. Estilos a Nosotros 4 min]()
- 
### [105. Creando la sección de Anuncios 4 min]()
- 
### [106. Estilos a la sección de Anuncios 7 min]()
- 
### [107. Finalizando la sección de Anuncios 7 min]()
- 
### [108. Creando el Footer 4 min]()
- 
### [109. Estilos al Footer 8 min]()
- 
### Sección 14: PROYECTO: Sitio Web para un Freelancer 0 / 9|37 min
### [110. Creando el Header 3 min]()
- 
### [111. Estilos al Header 3 min]()
- 
### [112. Creando la sección de Servicios 3 min]()
- 
### [113. Estilos y Grid a los servicios 6 min]()
- 
### [114. Creando la sección de Portafolio 1 min]()
- 
### [115. Utilizando Fetch API para el portafolio 11 min]()
- 
### [116. Estilos al Portafolio 5 min]()
- 
### [117. Creando el Footer 1 min]()
- 
### [118. Estilos al Footer 3 min]()
- 
### Sección 15: PROYECTO: AirBNB, recreando la página Principal 0 / 20|1 h 45 min
### [119. Comenzando el Proyecto 5 min]()
- 
### [120. Creando variables y estilos al Header 7 min]()
- 
### [121. Finalizando el Header 5 min]()
- 
### [122. Estilos al Buscador 8 min]()
- 
### [123. Creando la primer sección de Anuncios 5 min]()
- 
### [124. Estilos a los anuncios 7 min]()
- 
### [125. HTML para la sección Premium 2 min]()
- 
### [126. Estilos para la sección Premium 10 min]()
- 
### [127. Finalizando la sección Premium 6 min]()
- 
### [128. Creando la sección de Hospedaje 4 min]()
- 
### [129. HTML para los destinos populares 2 min]()
- 
### [130. Estilos para los destinos populares 3 min]()
- 
### [131. Creando la sección de anuncios de la parte inferior 3 min]()
- 
### [132. HTML para el footer 5 min]()
- 
### [133. Estilos al Footer 4 min]()
- 
### [134. Creando el Menú de Redes Sociales 3 min]()
- 
### [135. Creando el botón para mostrar / ocultar el footer 4 min]()
- 
### [136. JavaScript para el Footer 8 min]()
- 
### [137. Estilos para mostrar y ocultar el Footer 5 min]()
- 
### [138. Últimos Ajustes al Proyecto 10 min Curso en vídeo Enseña en línea Crea un curso en vídeo en línea, llega a estudiantes de todo el mundo y gana dinero]()
- 