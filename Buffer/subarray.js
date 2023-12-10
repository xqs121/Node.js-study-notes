/**
 * Buffer.prototyoe.slice() 已被弃用
 * 原因可能是 Buffer.prototyoe.slice() 与 TypedArray.prototype.slice() 行为不一致。
 * Buffer.prototyoe.slice() 是在现有的 Buffer 上创建视图，而不是真正的复制。
 * 这种行为会导致意外修改原始的数据。
 * 而 TypedArray.prototype.slice() 会创建一个新的 TypeArray 。
 * 现在请使用 Buffer.prototype.subarray() 代替。
 * 为了兼容旧版本的 Buffer.prototyoe.slice() 请使用 Buffer.prototype.subarray() 代替。
 */


// <Buffer 4e 6f 64 65 2e 6a 73>
// const buff_1 = Buffer.from("Node.js")
// const buff_11 = buff_1.subarray(5)
// buff_11[0] = 1

// console.log('buff_1', buff_1)
// console.log('buff_11', buff_11)


// <Buffer 4e 6f 64 65 2e 6a 73>
// const buff_2 = Buffer.from("Node.js")
// const buff_21 = buff_2.subarray(5)
// buff_21[0] = 1

// console.log('buff_2', buff_2)
// console.log('buff_21', buff_21)


const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const uint8_1 = uint8.slice(1, 3)
uint8_1[0] = 28
console.log(uint8_1);
// Expected output: Uint8Array [20, 30]

console.log(uint8);
// Expected output: Uint8Array [20, 30, 40, 50]








