const path = require('path')
const fs = require('fs')

// [Error: ENOENT: no such file or directory, open 'F:\data.txt']
// fs.readFile(path.resolve("/data.txt"), 'utf8', (err, data) => {
//   if (err) throw err

//   console.log(data)
// })

// data.txt、./data.txt
// [Error: ENOENT: no such file or directory, open 'F:\Study\Node.js\NodeStudy\data.txt']
// fs.readFile(path.resolve("data.txt"), 'utf8', (err, data) => {
//   if (err) throw err

//   console.log(data)
// })


// [Error: ENOENT: no such file or directory, open 'F:\data.txt']
fs.readFile(path.join(__dirname, "data.txt"), 'utf8', (err, data) => {
  if (err) throw err

  console.log(data)
})
