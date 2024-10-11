// file 2

// let math= require('./app');

// console.log(math)



// PS D:\backend\requiringFile> node app.js
// 3.141592653589793
// [Function: ans1]
// [Function: ans2]
// PS D:\backend\requiringFile> node math.js
// 3.141592653589793
// [Function: ans1]
// [Function: ans2]
// {}





// the outpur will remain the same


// console.log(math.pi)
// console.log(math.ans1(2))
// console.log(math.ans2(2,3));




// destructuring 

// let {pi , ans1 , ans2}=require('./app')

// console.log(pi);
// console.log(ans1(9));
// console.log(ans2(2,2));


// PS D:\backend\requiringFile> node math.js
// 3.141592653589793
// [Function: ans1]
// [Function: ans2]
// 3.141592653589793
// 81
// 4



// let {pii, ans1 , ans2}=require('./app')  // as the key  should be shame as declared in the module.exports

// console.log(pii);
// console.log(ans1(9));
// console.log(ans2(2,2));


// PS D:\backend\requiringFile> node math.js
// 3.141592653589793
// [Function: ans1]
// [Function: ans2]
// 3.141592653589793
// 81
// 4


// let {pii:hello, ans1 , ans2}=require('./app') 

// console.log(hello);
// console.log(ans1(9));
// console.log(ans2(2,2));

let naam=require('./app')

console.log(naam)