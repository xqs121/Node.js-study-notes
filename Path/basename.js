/**
 * 返回路径中的最后一部分，文件名或目录名
 * 如果设置了第一个参数（扩展名），且匹配成功，
 * 则返回的文件名不包括扩展名
 * 
 */

const path = require("path")

// 包含文件扩展名
const filename = path.basename(__filename)
console.log("filename", filename)

// 删除文件扩展名
const mainname = path.basename(`${__dirname}/main.js`, '.js')
console.log('mainname', mainname)


// 删除文件扩展名不匹配
const testname = path.basename(`./test.js`, '.html')
console.log('testname', testname)


const dirname = path.basename(__dirname)
console.log("dirname", dirname)