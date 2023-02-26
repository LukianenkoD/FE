// --1--
let mult = 1;
let array = [10,5,3,4,5]; 
for(i=0; i<array.length; i++){
 mult = mult*array[i];
}
console.log(mult);
// --2--
let sumKv = 0;
let array1 = [2,2,5,-3,-10,7]; 
for(i=0; i<array1.length; i++){
 sumKv = sumKv+array1[i]**2;
}
console.log(sumKv);
// --3--
let arrayMax = [-1110,-666,222,333,555,9]; 
for(i=0; i<arrayMax.length; i++){
 
 if (arrayMax[i]>arrayMax[0]){
    arrayMax[0]=arrayMax[i];
 }
}
console.log(arrayMax[0]);
// --4--
let arrayMin = [1,3,1,2,0.5,9,]; 
for(i=0; i<arrayMin.length; i++){
 
 if (arrayMin[i]<arrayMin[0]){
    arrayMin[0]=arrayMin[i];
 }
}
console.log(arrayMin[0]);
//  --5--
let sum = 0;
let arrayAverage = [11,10,0,-10,-10]; 
for(i=0; i<arrayAverage.length; i++){
 sum = sum+arrayAverage[i];
 
}
console.log(sum/i);
// --6--
let arrayPlus = [-111,5,2,333,555,-9, 56]; 
for(i=0; i<arrayPlus.length; i++){
 
 if (arrayPlus[i]>0){
  
    console.log(arrayPlus[i]);

 }
}
