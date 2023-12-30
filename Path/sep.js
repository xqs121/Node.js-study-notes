/**
 * path.sep
 * 当前平台的路径片段分隔符（目录分隔符）
 * 在 Windows 上，正斜杠(/)和反斜杠(\)都被接收作为路径片段分隔符，
 * 但是 path 方法只添加反斜杠(\)
 * 
 */

const path = require('path');
const sep = path.sep

console.log('sep', sep)


const pathStr = 'foo\\bar\\baz'
const pathArr = pathStr.split(sep)
console.log('pathArr', pathArr)

