const os = require('os')

console.log('platform:',os.platform())
console.log('CPU architecture:',os.arch())
console.log('Total Memory:',os.totalmem())
console.log('Free memory:',os.freemem())