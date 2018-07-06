'use strict';

function collectSameElements2(collectionA, objectB) {
  let result = []
  collectionA.forEach(v => {
    let index = objectB.value.indexOf(v.key)
    if(index !== -1){
      result.push(objectB.value[index])
    }
  })
  
  return result
}

const collectSameElements = (collectionA, objectB) => {
  return collectionA.map(v => v.key).filter(v => objectB.value.includes(v))
}