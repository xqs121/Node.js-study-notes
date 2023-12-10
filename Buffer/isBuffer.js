/**
 * 校验是否是 Buffer 实例
 * 
 */


const { Buffer } = require("node:buffer");


const isBuf1 = Buffer.isBuffer(Buffer.alloc(10))
console.log("isBuf1", isBuf1)



const isBuf2 = Buffer.isBuffer(Buffer.from([0xff, 0xff, 0xff, 0xff]))
console.log("isBuf2", isBuf2)


// Buffer 是 Uint8Array 的子类
const isBuf3 = Buffer.isBuffer(new Uint8Array(10))
console.log("isBuf3", isBuf3)

console.dir(ArrayBuffer.prototype)