'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = []
  collectionA.forEach(v => collectionB[0].includes(v) && result.push(v))
  return result
}

const collectSameElements2 = (collectionA, collectionB) => {
  return collectionA.map(v => collectionB[0].includes(v) && v)
}
