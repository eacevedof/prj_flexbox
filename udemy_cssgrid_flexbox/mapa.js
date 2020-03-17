
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
  //console.table(arto)
  return arto
}

const archilds = []

const previous = []

const _get_childs = (inode)=>{
  archilds.push(inode)
  if(_has_child(inode)){
    console.log("inode:",inode)
    //archilds.push(inode)
    const arto = _get_from(inode)
    //console.log(inode,arto)
    arto.forEach(obj => {
      if(!archilds.includes(obj.to))
        _get_childs(obj.to)
    })
  }

}//_get_childs

_get_childs(0)
//console.log("previous",previous)
console.log("archilds",archilds)