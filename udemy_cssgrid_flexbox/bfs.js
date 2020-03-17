//bfs (Bread First Search) o busqueda en anchura
//https://www.youtube.com/watch?v=-qX4lodQ920 Matriz de adyacenci
// Total de caminos diferentes entre G https://youtu.be/-qX4lodQ920?t=243
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
];

//console.table(roads)
const _has_child = (inode,roads)=>{
  const inodes = roads.filter(obj => obj.from == inode).length
  return inodes>0
}

const _has_parent = (inode,roads)=>{
  const inodes = roads.filter(obj => obj.to == inode).length
  return inodes>0
}

const _get_from = (inode,roads)=>{
  const arto =  roads.filter(obj => obj.from == inode)
  //console.table(arto)
  return arto
}

const _is_visited = (inode,visited) => {
  const iv = visited.filter(xnode => inode == xnode).length
  return (iv > 0)
}

const _get_not_visited = (inode,roads,visited) => {
  const archilds = roads.filter(obj => obj.from == inode)
  const notvisited = archilds.map(obj => obj.to).filter(xnode => !visited.includes(xnode))
  return notvisited
}

const _get_dist_nodes = (roads) => {
  const nodes = []

  roads.forEach( obj =>{
    nodes.push(obj.from)
    nodes.push(obj.to)

  })
  const dist = [...new Set(nodes)]
  return dist.sort()
}

const _is_allvisited = (allnodes,visited)=>{
  const inotvisited = allnodes.filter(xnode => !visited.includes(xnode)).length
  return inotvisited==0
}

const _get_last_item = array => array.length-1>0 ? array[array.length-1] : null

//const allnodes = _get_dist_nodes(roads)

//deep first traversal
const dfs = (istart,iend,roads)=>{

  const visited = []
  const pathlist = []

  _all_paths(istart,iend,visited,pathlist,roads)
}

const _all_paths = (ifrom,ifinish,visited,pathlist,roads)=>{
  visited.push(ifrom)

  if(ifrom == ifinish){
    console.log(pathlist)
  }

  const childs = _get_not_visited(ifrom,roads,visited)
  childs.forEach(xnode => {
    pathlist.push(xnode)
    _all_paths(xnode,ifinish,visited,pathlist,roads)
    const irmv = pathlist.indexOf(xnode)
    pathlist.splice(irmv,1)
  })

}

//breadth first search (busqueda por anchura)
const bfs = (roads,ifrom)=>{
  //const allnodes = _get_dist_nodes(roads)
  const visited = []
  const distancia = []
  const padre = []
  
  visited.push(ifrom)
  distancia.push({ifrom:0})

  const queue = []
  queue.push(ifrom)
  while (queue.length!=0){
    const inode = queue.pop()
    const notvisited = _get_not_visited(inode,roads,visited)
    notvisited.forEach(xnode => {
      visited.push(xnode)
      distancia.push({node:xnode,dist:0})
      padre.push({node:inode,child:xnode})
      queue.push(xnode)
    })
  }
  //console.log("visited:",visited,"distancia",distancia,"padre:",padre)
  console.table(visited)
  console.table(distancia)
  console.table(padre)
}


//hay arista
const _is_edge = (istart,iend,roads)=>{
  const arres = roads.filter(obj => obj.from==istart && obj.to==iend)
  return arres.length>0
}

const _get_adyacency = (roads)=>{
  const allnodes = _get_dist_nodes(roads)
  const matrix = []
  allnodes.forEach((xnode,i)=>{
    const row = []
    allnodes.forEach((ynode,j)=>{
      const is_edge = _is_edge(xnode,ynode,roads)
      row.push(is_edge?1:0)
    })
    matrix.push(row)
  })
  return matrix
}

const _get_product = (m1,m2)=>{
  //console.table(m1)
  //console.table(m2)
  let newmat = []
  const ilenm1 = m1.length
  const ilenm2 = m2.length
  if(ilenm1 == ilenm2 && ilenm1>0){
    const get_col = (icol,mx)=> mx.map(row => row[icol])
    const get_rowbycol = (row,col)=>{
      const result = []
      row.forEach((ival,i)=>{
        const iprod = col[i] * ival
        result.push(iprod)
      })
      return result.reduce((ac,ival)=>ac+ival)
    }

    for(let i=0; i<ilenm1; i++){
      const arrow = m1[i]
      const resrow = []

      for(let j=0; j<ilenm2; j++){
        const arcol = get_col(j,m2)
        const ires = get_rowbycol(arrow,arcol)
        resrow.push(ires)
      }
      newmat.push(resrow)
    }
  }
  //console.log("_get_product")
  //console.table(newmat)
  return newmat
}

const _get_mat_potency = (m1,iexp)=>{
  if(iexp==0) return 1
  if(iexp==1) return m1
  let result = m1
  for(let i=0; i<(iexp-1); i++){
    result = _get_product(result,m1)
  }
  console.log("_get_mat_potency",iexp)
  console.table(result)
  return result
}

const _get_num_roads = (inodes,roads,istart,ifinish)=>{
  const adjmatrix = _get_adyacency(roads)
  const resmat = _get_mat_potency(adjmatrix,inodes)
  const total = resmat[istart][ifinish]
  console.log("total roads",total)
  return total
}

const istart = 0, iend = 4
const aradjacen = _get_adyacency(roads)
console.table(aradjacen)
//dfs(istart,iend,roads)
bfs(roads,istart)