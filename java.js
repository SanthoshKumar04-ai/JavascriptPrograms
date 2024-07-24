first-program-fizz-buzz//

let i;

for(i=1;i<=100;i++)
{
    if(i%3===0 && i%5===0)
        console.log("fizz buzz");
    else if(i%3==0)
        console.log("fizz");
    else if(i%5==0)
        console.log("buzz");
    else
        console.log(i);
}

Palindrome//
let str;
function pali(str){
    let str2="";
   
    for(i=str.length;i>0;i--)
    {
        let c;
        c=str.charAt(i);
        str2=str2+c;
    }
    if(str=str2)
        console.log("Palindrome");
    else
        console.log("Not a palindrome");
}

pali("saas");

largest-num-in-an-array//

function large(arr) {
  
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(large([31, 8, 57, 32, 47]));


factorial//
function factorial(n) {
    let fa = 1;
    for (let i = 1; i <= n; i++) {
        fa=fa*i;
    }
    return fa;
}

console.log(factorial(5)); 

celsius to fahrenheit//

function celtofah(cel)
{
    let fah= (9/5)*cel+32;
    return fah;

}

console.log(celtofah(10));

largest-word//


 const  arr1=[2,7,8,39,9];
    let a=Math.max(...arr1);
    let b=Math.min(...arr1);
    console.log(a);
    console.log(b);

//key:obj//

function  keyobj(str){
   
    let i;
    let count;

    for(i=0;i<str.length;i++)
     {
        
     }
}
