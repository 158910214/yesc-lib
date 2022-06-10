// 基本类型：String、Number、Boolean、Symbol、Undefined、Null、Symbol、BigInt
// 引用类型：Object、Map、Set、Error
const getTypeString = obj => Object.prototype.toString.call(obj).slice(1, -1).split(' ')[1]

const isNumber = num => getTypeString(num) === 'Number'
const isString = str => getTypeString(str) === 'String'
const isDate = date => getTypeString(date) === 'Date'
const isArray = arr => getTypeString(arr) === 'Array'
const isObject = obj => getTypeString(obj) === 'Object'
const isAsyncFunction = fn => getTypeString(fn) === 'AsyncFunction'
const isFunction = fn => getTypeString(fn) === 'Function' || isAsyncFunction(fn)
const isSymbol = symbol => getTypeString(symbol) === 'Symbol'
const isMap = map => getTypeString(map) === 'Map'
const isSet = set => getTypeString(set) === 'Set'
const isBigInt = bigInt => getTypeString(bigInt) === 'BigInt'
const isError = error => getTypeString(bigInt) === 'Error'

const isNotEmptyString = (str, isAllowEmpty) => isString(str) && !!(isAllowEmpty || str)
const isUndefined = str => str === undefined
const isNull = str => str === null
const isNumberFinite = num => Number.isFinite(num)
const isNumberInteger = num => isNumber(num) && Number.isInteger(num)