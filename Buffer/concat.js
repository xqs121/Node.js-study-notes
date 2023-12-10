/**
 * Buffer.concat() 将多个 Buffer 进行拼接，返回新的 Buffer
 * 新的 Buffer 与之前的 Buffe 不共享内存
 * Buffer.concat(list[, totalLength])，接收两个参数 list、totalLength(不必填)
 * list <Buffer[]> | <Uint8Array[]> 是一个数组，数组的每一项必须是 Buffer 实例或 Uint8Array 实例
 * totalLength <integer> 拼接时，返回的 Buffer 实例的总长度，默认值是 list 中所有 Buffer 实例的长度之和
 * 返回一个全新的 <Buffer>
 * 
 */


const buf1 = Buffer.from("hello")
const buf2 = Buffer.from(" world")

// b 是一个全新的 Buffer，不与 b1、b2 共享内存
const bufConCat1 = Buffer.concat([buf1, buf2])

function bufferToString(name = '', buffer) {
  const bufferStr = buffer.toString()
  console.log(name, bufferStr)

  return bufferStr
}

bufferToString('bufConCat1', bufConCat1)

// 修改 buf2[0]，bufConCat1 并未发生任何变化
buf2[0] = 0x2b
bufferToString('buf2', buf2)
bufferToString('bufConCat1', bufConCat1)


// totalLength
const buf1buf2totalength = buf1.length + buf2.length
console.log("buf1buf2totalength", buf1buf2totalength)

// totalLength < buf1buf2totalength，不足的部分默认填充00
const bufConCat2 = Buffer.concat([buf1, buf2], 8)
bufferToString('bufConCat2', bufConCat2)

// totalLength > buf1buf2totalength
const bufConCat3 = Buffer.concat([buf1, buf2], 20)
console.log("bufConCat3", bufConCat3)
bufferToString('bufConCat3', bufConCat3)


const bufConCat4 = Buffer.concat([bufConCat3, buf1])
console.log('bufConCat4', bufConCat4)
console.log((bufferToString('bufConCat4', bufConCat4) + "aa").length)




