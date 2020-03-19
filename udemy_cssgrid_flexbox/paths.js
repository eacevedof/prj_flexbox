/*
	¡El GPS se ha roto y tenemos que llegar a un sitio!

	Por suerte, tienes un mapa y tu algoritmo sigue intacto. Eso sí, tu mapa es
	un poco	extraño: todas las intersecciones están etiquetadas con números enteros
	diferentes y las  carreteras que las conectan están etiquetadas con el tiempo
	que se tarda en recorrerlas expresado en minutos.

	Te encuentras en la intersección etiquetada como "start" y tu destino es la
	interescción etiquetada como "finish".

	Dispondrás del número total de intersecciones y un array de carreteras, cada
	una de ellas con las propiedades: "from", "to" (las interesecciones están
	etiquetadas con números enteros menores que el número de intersecciones) y
	"drivingTime". Las carreteras sólo pueden ser usadas para ir desde "from" a
	"to". No hay carreteras de doble sentido.

	Completa la función para que devuelva un array de intersecciones de la ruta
	más rápida desde "start" hasta "finish" (ambas incluidas).

	Si hay vairas rutas iguales, coge cualquiera. Si no hay rutas, devuelve null.

	Ejemplo:

	var roads = [
	    {from: 0, to: 1, drivingTime: 5},
	    {from: 0, to: 2, drivingTime: 10},
	    {from: 1, to: 2, drivingTime: 10},
	    {from: 1, to: 3, drivingTime: 2},
	    {from: 2, to: 3, drivingTime: 2},
	    {from: 2, to: 4, drivingTime: 5},
	    {from: 3, to: 2, drivingTime: 2},
	    {from: 3, to: 4, drivingTime: 10}
	];
	navigate(5, roads, 0, 4);
	// devolvería [0, 1, 3, 2, 4]. Tiempo más rápido is 5 + 2 + 2 + 5 = 14 minutes

*/
const roads = [
	{from: 0, to: 1, drivingTime: 5},
	{from: 0, to: 2, drivingTime: 10},
	{from: 1, to: 2, drivingTime: 10},
	{from: 1, to: 3, drivingTime: 2},
	{from: 2, to: 3, drivingTime: 2},
	{from: 2, to: 4, drivingTime: 5},
	{from: 3, to: 2, drivingTime: 2},
	{from: 3, to: 4, drivingTime: 10}
]

const _get_rawmatrix = (roads) => roads.map(obj => [obj.from,obj.to])

const _in_array = (ar1,ar2) => {
  const ilen = ar2.filter( (vertix,i,arx) => (vertix[0]==ar1[0] && vertix[1] == ar1[1])).length
  //console.log(ar1,ar2,ilen)
  return ilen>0
}

const _get_loops = (raw)=>{
  const loops = raw.filter( vertix =>{
    return _in_array(vertix,raw) && _in_array([vertix[1],vertix[0]],raw)
  })
  return loops
}

//const raw = _get_rawmatrix(roads)
//console.log("raw",raw)

const _get_nodes = (ifrom,raw) => raw.filter(row => row[0]==ifrom).sort()

const _get_ends = (nodes) => nodes.map(ar => ar[1]).sort()

const _ar_copy = (org,dest) => {
  org.forEach(ar => {
    if(! dest.includes(ar))
      dest.push(ar)
  })
}

const _has_destiny = (vertix,dest) => vertix[1] == dest

const _get_count = (vertix,rows) =>{
  const count = rows.reduce((ac,item)=>{
    if(item[0] == vertix[0] && item[1] == vertix[1])
      return ac + 1
    return ac + 0
  },0)
  return count
}

const _get_paths = roads => {
  const from = 1
  const to = 3
  const visited = []
  
  const raw = _get_rawmatrix(roads)
  console.log("raw")
  console.table(raw)

  const loops = _get_loops(raw)
  console.log("loops")
  console.table(loops)

  const ar1 = _get_nodes(from,raw)
  console.log("ar1",ar1)
  _ar_copy(ar1,visited)

  //console.log("visited")
  //console.table(visited)

  let ends = [...new Set(_get_ends(ar1).filter(iend => iend<to))]
  console.log("ends1")
  console.table(ends)
  
  const ar2 = []
  ends.forEach((xnode)=>{
    const artmp = _get_nodes(xnode,raw)
    artmp.forEach(vertix => {
      const ivis = _get_count(vertix, visited)
      //console.log(vertix,ivis)
      if(!_in_array(vertix,visited) || 
        (_in_array(vertix,visited) && _has_destiny(vertix,to)) 
        || (_in_array(vertix,visited) && _in_array(vertix,loops) && ivis<2)){
        ar2.push(vertix)
        visited.push(vertix)
      }
    })
    //_ar_copy(artmp,ar2)
  })
  console.log("ar2",ar2)

  ends = [...new Set(_get_ends(ar2).filter(iend => iend<to))]
  console.log("ends2")
  console.table(ends)
  
  const ar3 = []
  ends.forEach((xnode)=>{
    const artmp = _get_nodes(xnode,raw)
    artmp.forEach(vertix => {
      const ivis = _get_count(vertix, visited)
      //console.log(vertix,ivis)
      if(!_in_array(vertix,visited) || 
        (_in_array(vertix,visited) && _has_destiny(vertix,to)) 
        || (_in_array(vertix,visited) && _in_array(vertix,loops) && ivis<2)){
        ar3.push(vertix)
        visited.push(vertix)
      }
    })
    //_ar_copy(artmp,ar3)
  })
  console.log("ar3",ar3)

  ends = [...new Set(_get_ends(ar3).filter(iend => iend<to))]
  console.log("ends3")
  console.table(ends)

  const ar4 = []
  ends.forEach((xnode)=>{
    const artmp = _get_nodes(xnode,raw)
    artmp.forEach(vertix => {
      const ivis = _get_count(vertix, visited)
      //console.log(vertix,ivis)
      if(!_in_array(vertix,visited) || 
        (_in_array(vertix,visited) && _has_destiny(vertix,to)) 
        || (_in_array(vertix,visited) && _in_array(vertix,loops) && ivis<2)){
        ar4.push(vertix)
        visited.push(vertix)
      }
    })
    //_ar_copy(artmp,ar4)
  })
  console.log("ar4",ar4)  

  ends = [...new Set(_get_ends(ar4).filter(iend => iend<to))]
  console.log("ends3")
  console.table(ends)

  const ar5 = []
  ends.forEach((xnode)=>{
    const artmp = _get_nodes(xnode,raw)
    artmp.forEach(vertix => {
      const ivis = _get_count(vertix, visited)
      //console.log(vertix,ivis)
      if(!_in_array(vertix,visited) || 
        (_in_array(vertix,visited) && _has_destiny(vertix,to)) 
        || (_in_array(vertix,visited) && _in_array(vertix,loops) && ivis<2)){
        ar5.push(vertix)
        visited.push(vertix)
      }
    })
  })
  console.log("ar5",ar5)

  ends = [...new Set(_get_ends(ar5).filter(iend => iend<to))]
  console.log("ends3")
  console.table(ends)

  const ar6 = []
  ends.forEach((xnode)=>{
    const artmp = _get_nodes(xnode,raw)
    artmp.forEach(vertix => {
      const ivis = _get_count(vertix, visited)
      //console.log(vertix,ivis)
      if(!_in_array(vertix,visited) || 
        (_in_array(vertix,visited) && _has_destiny(vertix,to)) 
        || (_in_array(vertix,visited) && _in_array(vertix,loops) && ivis<2)){
        ar6.push(vertix)
        visited.push(vertix)
      }
    })
  })
  console.log("ar6",ar6)

}// _get_paths

_get_paths(roads)
