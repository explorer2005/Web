let fs=require('fs');
function print(err,data){
  console.log(data);
}
const data= fs.readFile("a.txt","utf-8");
console.log("done!");
