const roads = [
	{from: 0, to: 1, dist: 5},
	{from: 0, to: 2, dist: 10},
	{from: 1, to: 2, dist: 10},
	{from: 1, to: 3, dist: 2},
	{from: 2, to: 3, dist: 2},
	{from: 2, to: 4, dist: 5},
	{from: 3, to: 2, dist: 2},
	{from: 3, to: 4, dist: 10}
];

const _get_dist_nodes = () => {
  const nodes = []

  roads.forEach( obj =>{
    nodes.push(obj.from)
    nodes.push(obj.to)

  })
  const dist = [...new Set(nodes)]
  return dist.sort()
}

const _get_siblings = inode => {
  const nodes = roads.filter(obj => obj.from == inode).map(obj => obj.to)
  return nodes
}

const _get_distance = (node1,node2)=>{
  const arnode = roads.filter(obj => obj.from == node1 && obj.to == node2)
  return arnode[0].dist
}

const _get_mindist = ardists => {
  const objmin = ardists.sort((obja,objb)=>obja.dist - objb.dist)
  if (objmin.length>0)
    return objmin[0]

  return []
}

const _all_sealed = (nodes,closed) => {
  const notclosed = nodes.filter(inode => !closed.includes(inode))
  //console.log(notclosed)
  return notclosed.length==0
}

const _add_hist = (inode,dist,fromnode)=>{  
  const arnode = nodehist.filter(obj => obj.node == inode)

  //update
  if(arnode.length>0){
    const newhist = nodehist.filter(obj => obj.node != inode)
    arnode[0].hist.push({dist,fromnode})
    newhist.push(arnode[0])
    nodehist = newhist
  }
  //insert
  else{
    const obj = {
      node:inode,
      hist:[{dist,fromnode}]
    }
    nodehist.push(obj)
  }
}// _add_hist

const _get_last_dist = inode => {
  const arnode = nodehist.filter(obj => obj.node == inode)
  if(arnode.length>0){
    const ilast = arnode[0].hist.length - 1
    return arnode[0].hist[ilast].dist
  }
  return 0
}

const _get_sibl_cleaned = (arsiblings,arclosed)=>{
  //si el hermano no esta sellado
  const arnodesok = arsiblings.filter(isblnode => !arclosed.includes(isblnode))
  return arnodesok
}

const _load_path = (iend,istartnode)=>{
  const objnode = nodehist.filter(obj => obj.node == iend)[0]
  const ilen = objnode.hist.length - 1
  const iprev = objnode.hist[ilen].fromnode
  arfullpath.push(iprev)
  if(iprev!==istartnode){
    _load_path(iprev,istartnode)
  }
}

const _get_times = (arfullpath)=>{
  const artimes = []
  for(let i=0; i<arfullpath.length; i++){
    let inext = i+1;
    if(i+1==arfullpath.length)
      break;
    //console.log("dist:",i,inext, arfullpath[i],arfullpath[inext])
    const dist = roads.filter(obj => obj.from == arfullpath[i] && obj.to==arfullpath[inext])
    artimes.push(dist[0].dist)
  }
  return artimes
}

//============================
//let distances = [{dist:0,fromnode:0,innode:0}]
const sealed = []
let nodehist = []
const arfullpath = []

const _dijkstra = ()=>{
  const istartnode = 0
  const iendnode = 4

  const nodes = _get_dist_nodes()

  let nextnode = null

  while (!_all_sealed(nodes,sealed)) {

    let inode = nextnode
    console.log("inode:",inode)
    
    if(!inode){
      inode = istartnode
      _add_hist(inode,0,inode)
      sealed.push(inode)
    }

    if(inode == iendnode){
      //si es el último nodo no tiene destino
      sealed.push(inode)
      continue;
    }
    
    const lastdist = _get_last_dist(inode)
    const siblings = _get_siblings(inode)
    //elimino los nodos sellados
    const siblingsok = _get_sibl_cleaned(siblings,sealed)
    
    const sibldists = [] 
    siblingsok.forEach(node2 => {
      const sibldist = _get_distance(inode,node2)
  
      const sumdist = sibldist + lastdist
      _add_hist(node2, sumdist, inode)
      sibldists.push({dist:sumdist, fromnode:inode, innode:node2})
    })

    const objmindist = _get_mindist(sibldists)
    _add_hist(objmindist.innode, objmindist.dist, objmindist.fromnode)
    nextnode = objmindist.innode
    sealed.push(objmindist.innode)

  }//while !sealed
  
  arfullpath.push(iendnode)
  _load_path(iendnode,istartnode)
  arfullpath.reverse()
  const artimes = _get_times(arfullpath)

  const msg = `[${arfullpath.toString()}]. Tiempo más rapido is: ${artimes.join(" + ")} = ${artimes.reduce((ac,val)=>ac+val)}`
  console.log("msg:",msg)
  return msg
}//dijkstra 


_dijkstra()
console.log("sealed:",sealed)
console.log("fullpath:",arfullpath)
console.log("\n\n",JSON.stringify(nodehist))
