'use strict';

function collectSameElements2(collectionA, objectB) {
  let result = []
  collectionA.forEach(v => {
    if (objectB.value.includes(v)) {
      result.push(v)
    }
  })
  return result
}

const collectSameElements = (collectionA, objectB) => {
  return collectionA.filter(v => objectB.value.includes(v))
}
