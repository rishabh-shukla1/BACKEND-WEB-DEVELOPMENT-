

// fizz busss


// 1st approach ---------------------------------->this is rejected as due to more use of modulos


// function fizzbuzz(n){


//     for(let i=0;i<=n;i++)
//     {
//         if(i%3==0 && i%5==0)
//         {
//             console.log("FizzBuzz")
//         }
//         else if(i%5==0)
//         {
//             console.log("Buzz")
//         }
//         else if(i%3==0)
//         {
//             console.log("Fizz")
//         }
//         else{
//             console.log(i);
//         }
//     }
// }


// fizzbuzz(20)




// 2nd approach -->little optimised  //  less modulos used


// function fizzbuzz(n){


//     for(let i=0;i<=n;i++)
//     {
//         let str='';
//         if(i%3==0 )
//         {
//             str+="Fizz"
//         }
//         if(i%5==0)
//         {
//              str+="Buzz"
//         }
//         if(str=='')
//         {
//             str+=i
//         }

//         console.log(str);
        
//     }
// }


// fizzbuzz(20)



// most optimised->no use of modulos



// function fizzbuzz(n){

//      let cnt3=0;
//      let cnt5=0;
//     for(let i=0;i<=n;i++)
//     {
//         let str='';
//         if(cnt3==3 )
//         {
//             str+="Fizz"
//             cnt3=0;
//         }
//         if(cnt5==5)
//         {
//              str+="Buzz"
//              cnt5=0
//         }
//         if(str=='')
//         {
//             str+=i
//         }

//         console.log(str);
//         cnt3++;

//         cnt5++;
        
//     }
// }


// fizzbuzz(20)





// output of the above codes


// FizzBuzz
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
