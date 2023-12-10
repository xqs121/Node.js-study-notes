function getMemory() {
  const memoryUsage = process.memoryUsage()
  console.log("memoryUsage", memoryUsage)
}

getMemory()

console.log(Buffer.poolSize)
const buffer = Buffer.alloc(1000)


getMemory()