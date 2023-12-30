/**
 * path.basename(path[, suffix])
 * path <string> 路径
 * suffix <string> 要删除的可选后缀，不一定是扩展名
 * 返回路径中的最后一部分，文件名或目录名，尾随的目录分隔符将被忽略。
 * 若存在可选参数 suffix，并且在路径的最后一部分末尾中成功匹配时，将会被删除。
 * 
 * 注意：
 * path.basename() 返回的是文件名或目录名，而不是一个路径
 * 
 */

const path = require("path")

// 返回路径的最后的（完整的）文件名
const fileName = path.basename(__filename)
console.log("fileName", fileName)


// 删除后缀 .js
const testName1 = path.basename(`${__dirname}/test.js`, '.js')
console.log('testName1', testName1)


// 删除的后缀在路径的最后一部分中不匹配
const testName2 = path.basename('./test.js', '.html')
console.log('testName2', testName2)


// 删除的后缀参数区分大小写
const testName3 = path.basename('./test.js', '.Js')
console.log('testName3', testName3)


// 删除后缀 t.js
const testName4 = path.basename('./test.js', 't.js')
console.log("testName4", testName4)


// 删除的后缀与路径的最后一部分完全匹配时，将会被忽略
const testName5 = path.basename('test.js', 'test.js')
console.log("testName5", testName5)


// 返回路径最后的（完整的）目录名
const dirname = path.basename(__dirname)
console.log("dirname", dirname)


// 尾随的目录分隔符被忽略
const dirname1 = path.basename('/node/test/')
console.log("dirname1", dirname1)


// 删除后缀 st
const dirname2 = path.basename('/node/test/', 'st')
console.log("dirname2", dirname2)


// 删除的后缀与路径的最后一部分完全匹配时，将会被忽略
const dirname3 = path.basename('/node/test/', 'test')
console.log("dirname2", dirname3)