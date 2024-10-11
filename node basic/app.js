let pi=3.144;
let magicno=68;

console.log('live class ka bhaukal')

function sqrt(num)
{
    return num*num;
}

let obj={

    first:'rishabh',
    last:'shukla',
    age:27,

    getname:function(){
        console.log(this.first+" "+this.last);
    }

}

console.log(pi);
console.log(magicno);
console.log(sqrt(6));
console.log(obj.getname());