rabajas en una aplicación en la que en la página de inicio cada usuario visualiza datos diferentes 
y no hay dos usuarios iguales. Se debe mostrar a cada usuario un resumen de toda la 
información que maneja en esta aplicación, pero calcular los datos es un proceso complejo 
que requiere de más de 10 segundos y un alto uso de CPU ¿Qué estrategia seguirías para resolver 
esta lentitud en la aplicación? 
¿A grandes rasgos, cómo se podría implementar esta solución?


- identificar cuellos de botella
- comprobar las consultas y ver si se pueden optimizar
- intentar realizar los cálculos en procedimientos almacenados
- reindexar tablas si fuera necesario
- comprobar si hay varios niveles de bucles anidados
- verificar si hay código repetido
- aplicar algun sistema de cache si no se necesitan los datos en tiempo real
- en front lanzar proceos asincronos de carga

https://docs.google.com/forms/d/e/1FAIpQLSeKmfg64YmhSlqsAwuQvbJjVIxZpkQdO25kMBTJdN4H_0BP4w/viewform?fbzx=-9222869809260174025