const fs = require('fs')

const content = 'This is the first file'

for(let i = 1 ; i<= 10 ; i++){
    fs.writeFile('examples.text',content,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('created file successfully')
})
}