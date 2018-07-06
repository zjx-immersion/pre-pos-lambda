'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = constructResultArr(collectionA)
  return result.map(v => {
    if (myIncludes(objectB.value, v.key)) {
      return {
         'key': v.key,
        'count': v.count - parseInt(v.count / 3)
      }
    } else {
      return {
        'key': v.key,
        'count': v.count
      }
    }
  })
}

function constructResultArr(array){
  let result = []
 for (let i = 0; i < array.length; i++) {
      let findResult = findObject(result, array[i])
      if (findResult == null) {
        result.push({ 'key': array[i], 'count': 1 })
      } else {
        findResult.count++
      }
  }
  return result
}

function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}

function findObject(array, key) {
  for (let obj of array) {
    if (obj.key === key) {
      return obj
    }
  }
  return null
}