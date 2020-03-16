Dada una tabla de “alumnos”, otra de “pruebas” y otra de “resultados”, 
donde un alumno tiene que realizar la misma prueba hasta que el resultado sea favorable, 
forma la query necesaria para obtener de un solo alumno la información de este 
(nombre, apellidos, etc...), 

de las las pruebas que ha realizado y que tendrá que realizar, 

y de los resultados que ha obtenido las que ya ha realizado. *



SELECT 
a.* --todos los datos del alumno
,estado.description -- el descriptivo de la prueba
,estado.estado  -- realizado o pendiente
,estado.valor   -- lo que ha obtenido
FROM alumnos a
INNER JOIN 
(
    -- pruebas que ha realizado
    SELECT a.id, p.id, p.description
    ,r.valor,'realizado' estado 
    FROM alumno a
    INNER JOIN resultado r
    ON a.id = r.alumno_id
    INNER JOIN pruebas p
    ON r.prueba_id = p.id
    WHERE 1
    AND a.id = $id_alumno -- un solo alumno

    UNION 

    -- las pruebas pendientes
    SELECT todas.alumno_id, todas.prueba_id,todas.description
    ,NULL valor,'pendiente' estado
    FROM 
    (
        -- todas las pruebas posibles
        SELECT a.id alumno_id, p.id prueba_id, p.description
        FROM alumnos a 
        CROSS JOIN pruebas p
        WHERE a.id = $id_alumno -- un solo alumno
    ) todas
    LEFT JOIN
    (
        -- las realizadas
        SELECT DISTINCT r.alumno_id, r.prueba_id
        FROM resultado r
        WHERE r.alumno_id = $id_alumno -- un solo alumno
    ) realizadas
    ON todas.alumno_id = realizadas.alumno_id
    AND todas.prueba_id = realizadas.prueba_id
    WHERE 1
    AND realizadas.alumno_id IS NULL
) estado
ON a.id = estado.id
