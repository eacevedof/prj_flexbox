//bfs (Bread First Search) o busqueda en anchura
//https://www.youtube.com/watch?v=-qX4lodQ920 Matriz de adyacenci
// Total de caminos diferentes entre G https://youtu.be/-qX4lodQ920?t=243
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


const steps = []
let queue = []
const visited = []

const allnodes = _get_dist_nodes(roads)


const _get_path = (istart)=>{
  steps.push(istart)
  
  queue.push(istart)
  visited.push(istart)

  if(!_is_allvisited(allnodes,visited)){
    let inode = _get_last_item(queue)
    const notvisited = _get_not_visited(inode)
    notvisited.forEach(xnode => {
      queue.push(xnode)
      visited.push(xnode)
    })
  }
  

}
//hay arista
const _is_edge = (istart,iend,roads)=>{
  const arres = roads.filter(obj => obj.from==istart && obj.from==iend)
  return arres.length>0
}

const _get_adyacency = (roads)=>{
  const allnodes = _get_dist_nodes(roads)
  allnodes.forEach((xnode,i)=>{
    
    allnodes.forEach((ynode,j)=>{

    })
  })
}


const _get_product = (m1,m2)=>{
  console.table(m1)
  console.table(m2)
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
  console.table(newmat)
  return newmat
}


const istart = 0
//_get_path(istart)
//console.log("previous",previous)
//console.log("archilds",archilds)

_get_product([[3,2],[1,4]],[[7,0],[5,6]])