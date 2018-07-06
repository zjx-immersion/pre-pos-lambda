'use strict';

function collectSameElements2(collectionA, collectionB) {
  let result = []
  for (let v of collectionA) {
    if (collectionB.indexOf(v) !== -1) {
      result.push(v)
    }
  }
  return result
}

const collectSameElements = (collectionA, collectionB) => {
  let result = []
  collectionA.forEach(v => collectionB.includes(v) && result.push(v))
  return result
}
