/**
 * 路径解析
 */

const path = require("path");
const filenameObj = path.parse(__filename)
console.log("filenameObj", filenameObj)


const dirnameObj = path.parse(__dirname)
console.log("dirnameObj", dirnameObj)