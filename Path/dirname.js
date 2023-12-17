/**
 * path.dirname(path)
 * 返回除路径最后一部分的剩余路径，尾随的目录分隔符将被忽略
 * 
 */

const path = require("path")

// 根据传入的文件路径，返回该文件所在的目录路径
const dirname = path.dirname(__filename)
console.log("dirname", dirname)


// 根据传入的目录路径，返回该目录所在的目录路径
const lastDirname = path.dirname(__dirname)
console.log("lastDirname", lastDirname)


// 返回最后一部分所在目录的路径，最后的 / 会被忽略
const testDirname = path.dirname('./a/b/c/')
console.log("testDirname", testDirname)



/**
 * 结合 path.basename() 不难发现，对于传入同一个路径来说，
 * 大多数情况下 path.basename() 与 path.dirname() 互补。
 *  
 */
const indexPath = '/a/b/c/index.html'
const indexBasename = path.basename(indexPath)
const indexDirname = path.dirname(indexPath)
const newIndexPath = indexDirname + "/" + indexBasename
console.log(indexPath === newIndexPath)


