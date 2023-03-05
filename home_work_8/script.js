// -------1---------
function arrayString(number, string){
    let arr = {};
    for (let i=0; i <number; i++){
        arr[i] = string+i;
    }
    return arr;
}
console.log(arrayString(5,"Hund"));
// -----------2---------------------
let massiv = [9,3,4,5,6,10];

function sumEven(massiv){
    let sum = 0;
    for (i=0; i<massiv.length; i++){
        if (massiv[i]%2 === 0){
        sum = sum + massiv[i];
}
}
return sum
}
function sumOdd(massiv){
    let sum = 0;
    for (i=0; i<massiv.length; i++){
        if (massiv[i]%2 !== 0){
        sum = sum + massiv[i];
}
}
return sum  
}
let odd = sumOdd(massiv);
let even = sumEven(massiv);
function maxSumEvenOrOdd(num1,num2){
if (num1>num2){
return num1
} else{
    return num2
}
}
console.log(sumEven(massiv));
console.log(sumOdd(massiv));
console.log(maxSumEvenOrOdd(odd,even));
// ---------3-------------
function farengeit(celsei){
   return (celsei*9/5)+32
}
console.log(farengeit(0));
// --------4---------
const massiv1 = [2,3,4,5,6,8];

function max(number){
    for (i=0; i<number.length; i++){
    if(number[i]>number[0]){
        number[0]=number[i]
    }
    
}
return number[0]
}
console.log(max(massiv1));
// ----------5-------------
const array = [2,3,4,5,6,8];

function min(number){
    for (i=0; i<number.length; i++){
    if(number[i]<number[0]){
        number[0]=number[i]
    }
    
}
return number[0]
}
console.log(min(array));
