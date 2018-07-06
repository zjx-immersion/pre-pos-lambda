'use strict';

function countSameElements2(collection) {
  return [... new Set(collection)].map(v => {
    if (v.includes('-')) {
      return {
        'key': v[0],
        'count': parseInt(v[2])
      }
    } else {
      return {
        'key': v,
        'count': collection.filter(c => c == v).length
      }
    }
  })
}

function countSameElements(collection) {
  let result = []
  for (let i = 0; i < collection.length; i++) {
    if (!myIncludes(collection[i], '-')) {
      let findResult = findObject(result, collection[i])
      if (findResult == null) {
        result.push({ 'key': collection[i], 'count': 1 })
      } else {
        findResult.count++
      }
    } else {
      result.push({ 'key': collection[i][0], 'count': parseInt(collection[i][2]) })
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
