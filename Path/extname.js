/**
 * 获取路径扩展名
 */

const path = require("path");

const extname = path.extname(__filename)
console.log("extname", extname)

const testExtname = path.extname('./a/b/c.test')
console.log("testExtname", testExtname)

// 第一个 . 无效
const testExtname2 = path.extname('.a')
console.log("testExtname2", testExtname2)