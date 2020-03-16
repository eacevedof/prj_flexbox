
const roads = [
	{from: 0, to: 1, drivingTime: 5},
	{from: 0, to: 2, drivingTime: 10},
	{from: 1, to: 2, drivingTime: 10},
	{from: 1, to: 3, drivingTime: 2},
	{from: 2, to: 3, drivingTime: 2},
	{from: 2, to: 4, drivingTime: 5},
	//{from: 3, to: 2, drivingTime: 2},
	{from: 3, to: 4, drivingTime: 10}
];

//console.table(roads)
const _has_child = (inode)=>{
  const inodes = roads.filter(obj => obj.from == inode).length
  return inodes>0
}

const _has_parent = (inode)=>{
  const inodes = roads.filter(obj => obj.to == inode).length
  return inodes>0
}

const _get_from = (inode)=>{
  const arto =  roads.filter(obj => obj.from == inode)
  console.table(arto)
  return arto
}

const archilds = []

const _get_childs = (inode)=>{
  if(_has_child(inode)){
    console.log("node "+inode+" has childs")
    //console.log("...getting childs")
    //console.log("call self for each")
    const arto = _get_from(inode)
    console.log("arto:",arto)
    arto.forEach(obj => _get_childs(obj.to))
  }
  else{
    console.log("node "+inode+" has no childs")
    archilds.push(inode)
    return inode
  }
}

_get_childs(0)
console.table(roads)
console.log("childs of:",0)
console.table(archilds)
//_get_childs(1)
//_get_childs(2)
//_get_childs(4)