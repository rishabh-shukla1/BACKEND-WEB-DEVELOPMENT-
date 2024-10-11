
// let t=process.argv

// console.log(t);




// PS D:\backend\node basic> node index.js
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\backend\\node basic\\index.js'
// ]
// PS D:\backend\node basic> node index.js 10 20 30 40 50 60 70 80 90 100
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\backend\\node basic\\index.js',
//   '10',
//   '20',
//   '30',
//   '40',
//   '50',
//   '60',
//   '70',
//   '80',
//   '90',
//   '100'
// ]
// PS D:\backend\node basic>




let t=process.argv.slice(2);

console.log(t);


// PS D:\backend\node basic> node index.js 10 20 30 
// [ '10', '20', '30' ]
// PS D:\backend\node basic>  



// for(let i of t)
// {
//     console.log(`Hello my name is ${i}`)

// }




// PS D:\backend\node basic>  node index.js 'rishabh' 'ram' 'shyam'
// [ 'rishabh', 'ram', 'shyam' ]
// Hello my name is rishabh
// Hello my name is ram
// Hello my name is shyam


for(let i=0; i<=t[0];i++)
{
    console.log(i)

}
