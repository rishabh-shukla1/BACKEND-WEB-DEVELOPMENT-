// file 1
let pi=Math.PI;
console.log(pi);

let ans1= (num) => num*num;
let ans2= (a,b)=>a+b;

console.log(ans1);
console.log(ans2);

// module.export={}  // the outpur will remain the same as it is default


// module.exports={ pi, ans1 , ans2 };

// module.exports={

//     pi:pi,           //-->it can be written as pi
//     ans1 : ans1,         // --->it can be written as  ans1 only



//     ans2 : ans2,    // --->it can be written as  ans2 only
// }  // same answer it will give as above
// PS D:\backend\requiringFile> node math.js
// 3.141592653589793
// [Function: ans1]
// [Function: ans2]
// 3.141592653589793
// 81
// 4


// module.exports={

//     pii:pi,           //-->it can be written as pi
//     ans1 : ans1,         // --->it can be written as  ans1 only



//     ans2 : ans2,    // --->it can be written as  ans2 only
// }  


module.exports='my name is rishabh'
