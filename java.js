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

//adding an element using splice

let arr=[1,2,3,4,5];
let item=10;
let position=2;
arr.splice(position,0,item);
console.log(arr);


//sorting arrays with complex object

let person=[
    {name:rahul,age:22},{name:paramesh,age:9}]
person.sort((a,b)=>a.age,b.age);
console.log(person);

//finding the longest string in an array

let set=["Ronaldo","messi","Neymar","Zlatan"];
let longest="";
for(let l in set)
    {
        if(l.length>longest.length)
            longest=l;
    }
console.log("Longest string is",longest);

//rotating an array

function rotateLeft(arr,k){
k=k%arr.length;
return arr.slice(k).concat(arr.slice(0,k));
}

function rotateright(arr,k){
k=k%arr.length;
return arr.slice(-k).concat(arr.slice(0,-k));

let array=[1,2,3,4,5];
console.log(rotateLeft(array,k);
console.log(rotateright(array,k));

//Genrating array of an given range

let start=0;
let end=10;
let array=Array.from({length:end - start},(_,i) => start + i);
console.log(array);
start=0;
end=10;
let step=2;
array=Array.from({length: Math.ceil((end - start)/step)},(_,i)=>start + i*step);
console.log(array);
    

 
