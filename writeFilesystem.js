const fs = require('fs')

const content = 'Hello, NodeJs'

fs.writeFile('output.txt',content,(err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('File written Successfully')
})