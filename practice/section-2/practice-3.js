'use strict';

function countSameElements(collection) {
  let result = []
  for (let i = 0; i < collection.length; i++) {
    let key = collection[i][0]
    let findResult = findObject(result, key)
    let findNum = getNum(collection[i])
    if (findResult == null) {
      result.push({ 'name': key, 'summary': findNum })
    } else {
      findResult.summary += findNum
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
    if (obj.name === key) {
      return obj
    }
  }
  return null
}

function getNum(str) {
  if (str.length == 1) {
    return 1
  }
  if (myIncludes(str, '-') || myIncludes(str, ':')) {
    return parseInt(str[2])
  }
  let startIndex = str.indexOf('[');
  let endIndex = str.indexOf(']');
  return parseInt(str.substring(startIndex + 1, endIndex))

}