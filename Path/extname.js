/**
 * path.extname(path)
 * 获取路径扩展名
 */

const path = require("path");

const basename_1 = path.basename(__filename)
const extname_1 = path.extname(__filename)
console.log("basename_1", basename_1)
console.log("extname_1", extname_1)


// path 的最后一部分没有 . ，返回空字符串
const path_2 = './a/b/../c/index'
const basename_2 = path.basename(path_2)
const extname_2 = path.extname(path_2)
console.log("basename_2", basename_2)
console.log("extname_2", extname_2)


// path 以 . 结尾
const path_3 = 'index.'
const basename_3 = path.basename(path_3)
const extname_3 = path.extname('index.')
console.log("basename_3", basename_3)
console.log("extname_3", extname_3)


// 除了 path 的基本名称（既 path.basename() 返回值）的第一个字符之外，没有 . 
const path_4 = '.index'
const basename_4 = path.basename(path_4)
const extname_4 = path.basename(path_4)
console.log("basename_4", basename_4)
console.log("extname_4", extname_4)