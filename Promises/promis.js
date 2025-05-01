// class Rectangle{
//     constructor(length,breadth,color){
//         this.length=length;
//         this.breadth=breadth;
//         this.color=this.color;
//         console.log("Constructor envoked")
//     }

//     area(){
//         return this.length*this.breadth;
//     }
// }
// const rect = new Rectangle(2,3,"Red");
// console.log(rect.area());

// const tap=new Map();
// tap.set("Name","Dhruv");
// tap.set("Age",20);
// console.log(tap.get("Name"));

// const timings =new Date();
// console.log(timings.getHours());

// function put(){
//     console.log("Dhruv");
// }

// setTimeout(put,10000);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// function dhruv(){
//     console.log("dhruv");
// }
// function Dhruv(){
//     console.log("Dhruv")
//}
// setTimeoutPromisified(10000).then(dhruv);
// setTimeoutPromisified(3000).then(Dhruv);

// let p=setTimeoutPromisified(3000).then(Dhruv);
// console.log(p);
// function promiseCallBack(resolve){
//     setTimeout(resolve,3000);
// }
// promiseCallBack(function(){
//     console.log("Hi");
// });

// function one(){
//     console.log("hi");
// }
// setTimeout(one,3000);

// function promisecallback(resolve){
//     setTimeout(resolve,3000);
// }
// promisecallback(function(){
//     console.log("Hi")
// });
function resolve(){
    console.log("Hi");
}
function random(resolve){
    setTimeout(resolve,3000);
    
}
let p=new Promise(random);
console.log(p);
function callback(){
    console.log("Hello")
}
p.then(callback);