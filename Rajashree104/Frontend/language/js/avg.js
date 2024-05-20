let marks=[12,34,56,78,90,54,32,98];

let sum=0;
for(let val of marks){
    sum =sum+val;
}
let avg=sum/marks.length;
console.log(`marks= ${avg}`);