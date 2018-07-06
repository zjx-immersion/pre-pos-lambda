'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(v => {
    if (myIncludes(objectB.value,v.key)) {
      return {
        'key': v.key,
        'count': --v.count
      }
    } else {
      return {
       'key': v.key,
        'count': v.count
      }
    }
  })
}

function myIncludes(array, value){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}
