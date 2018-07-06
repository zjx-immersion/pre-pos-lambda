'use strict';

function countSameElements2(collection) {
  let map = new Map()
  collection.forEach(v => {
    if (!map.has(v)) {
      map.set(v, 1)
    } else {
      map.set(v, map.get(v) + 1)
    }
  });
  let result = []
  for (let [key, value] of map.entries()) {
    let obj = {}
    obj.key = key
    obj.count = value
    result.push(obj)
  }
  return result
}

const countSameElements3 = (collection) => {
  let result = []
  new Set(collection).forEach(v =>
    result.push({ 'key': v, 'count': 0 })
  )
  return result.map(v => {
    return {
      'key': v.key,
      'count': collection.filter(c => c == v.key).length
    }
  })
}


const countSameElements = (collection) => {
  return [... new Set(collection)].map(v => {
    return {
      'key': v,
      'count': collection.filter(c => c == v).length
    }
  })
}


