/**
 * path.isAbsolute(path)
 * 确定 path 是否为绝对路径
 * 如果传入的 path 不是字符串，则抛出 TypeError
 * 
 */

const path = require('path')

const isAbsolute_1 = path.isAbsolute('/index')
console.log("isAbsolute_1", isAbsolute_1)


const isAbsolute_2 = path.isAbsolute('/index/..')
console.log("isAbsolute_2", isAbsolute_2)


const isAbsolute_3 = path.isAbsolute('src/index')
console.log("isAbsolute_3", isAbsolute_3)


const isAbsolute_4 = path.isAbsolute('.')
console.log("isAbsolute_4", isAbsolute_4)


const isAbsolute_5 = path.isAbsolute('c:/src/index')
console.log("isAbsolute_5", isAbsolute_5)





