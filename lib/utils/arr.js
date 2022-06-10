import { isObject } from './typeof'

const transReducify = (arr, fn, initValue = {}) => arr.reduce((x, y, index) => fn(x, y, index), initValue)

const transReducifyObj = (arr, fn = (y) => ({ [y[0]]: y[1] })) => transReducify(arr, fn, {})

export const createConfigList = (arr, keyList = ['label', 'prop']) => arr.map(item => {
  const extraItem = null
  if (item.length > keyList.length) {
    extraItem = item.slice(keyList.length, keyList.length + 1)[0]
  }
  if (!isObject(extraItem)) extraItem = {}
  return {
    ...transReducifyObj(keyList, (key, index) => isFunction(key) ? key(item[index]) : { [key]: item[index] }),
    ...extraItem
  }
})