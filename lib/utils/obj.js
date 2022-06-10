export const tansObject = (obj, fn = key => key) => Object.keys(obj).map(key => fn(key, obj[key]))
