

let fs=require('fs')
// console.log(fs);

 // we will perform CRUD
//  create
//  Read
//  UPDATE
//  delete




// CREATE or write  ->

//

// // or ->another way to write in file
// let data2='neha mam'

// fs.writeFileSync('abc.txt',data2)



// read

// fs.readFile('abc.txt',{encoding:'utf-8',
//     flag:'r'
// },(err,data)=>{
//     if(err){throw err}
//     console.log(data);
// })



// or  for read

// let data=fs.readFileSync('abc.txt')
// console.log(data); // this will give buffer 

// console.log(data.toString())



// UPDATE

// fs.appendFile('abc.txt','rishaabh shukla',(err)=>{
//     if(err){ throw err}
//     console.log("update kar dia")
// })


// alternative of  UPDATE


// fs.appendFileSync('abc.txt',' bhaukal bahajdkjshjfsj jsgdfiushfjhasjfhsafjzf hushf ')




// DELETE


// fs.unlink('abc.txt',(err)=>

// {
//     if(err){throw err}
//     console.log('kar dia delete')

// })



fs.unlinkSync('abc.txt')







