/**
 * path.delimiter
 * 获取特定于平台的路径分隔符（定界符）
 * 
 */

/**
 * 在 windows 系统上，查看环境变量 path 时，
 * 对应的值可以理解为多个文件夹的绝对路径拼接在一起的字符串。
 * 并且不同的文件夹绝对路径以 ';' 分隔，这个 ';' 就是定界符
 * 以此来表明 ; 前后的路径是完全独立的两个路径。
 * 
 */

const { log } = require("console")
const path = require("path")

// C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;...
const envPathStr = process.env.path
console.log('envPathStr', envPathStr)


// ;
const delimiter = path.delimiter
console.log('delimiter', delimiter)

// [
//   'C:\\Windows\\system32',
//   'C:\\Windows',
//   'C:\\Windows\\System32\\Wbem'
// ]
const envPathArr = envPathStr.split(delimiter)
console.log('envPathArr', envPathArr)

