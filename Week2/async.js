function sum(a,b){
    return a+b;
}
let ans=sum(2,3);
console.log(ans);

function summ(c){
    let sum=0;
    for(let i=1;i<=c;i++){
        sum+=i;
    }
    return sum;
}
//let a=prompt("Enter the number upto which the sum is required");
console.log(summ(10));