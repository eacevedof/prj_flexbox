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
- 
### [5. Flex Wrap 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10267834#overview)
- 
### [6. Flex Flow y Order 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268006#overview)
- 
### [7. Flex Grow, Flex Shrink, Flex Basis y el Shorthand Flex 9 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268018#overview)
- 
### [8. Flex Grow y flex a fondo 12 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/11558638#overview)
- 
### [9. Alineando con Flexbox 9 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268028#overview)
- 
### [10. Poniendo todo en práctica (Video 1 de 3) 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268036#overview)
- 
### [11. Poniendo todo en práctica (Video 2 de 3) 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268060#overview)
- 
### [12. Poniendo todo en práctica (Video 3 de 3) 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268062#overview)
- 
### Sección 3: PROYECTO: Diseño de tipo Cards en Flexbox 0 / 3|16 min
### [13. Arrancando el Proyecto 5 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10268074#overview)
- 
### [14. Agregando Media Queries a los Cards 4 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269018#overview)
- 
### [15. Estilos a los cards 7 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269652#overview)
- 
### Sección 4: Creando Menús de Navegación con Flexbox 0 / 6|35 min
### [16. Creando un Menú Sencillo 6 min](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269656#overview)
- 
### [17. Creando un Menú con Iconos (Pt 1 de 2) 7 min]](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/learn/lecture/10269668#overview)
- 
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