// let fs=require('fs');
// function print(err,data){
//   console.log(data);
// }
// let p= new Promise(random);
// function random(resolve){
//     setTimeout(resolve,10000);
// }
// p.then(print);
// fs.readFile("a.txt","utf-8",print);
// console.log("done!");
let fs = require('fs');
let p=readFile();
function readFile(){
    return new Promise(readTheFile);
}
function readTheFile(){
    fs.readFile("a.txt","utf-8",setTimeout(function(err,data){console.log(data)},10000));
}
p.then(callback);
function callback(data){
    console.log(data);
}