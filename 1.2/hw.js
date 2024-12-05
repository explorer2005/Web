// const color="Green";
// const height=181;
// const pizza="Yes";
// console.log(color);
// console.log(height);
// console.log(pizza);
// let numbers=[27,28,28,29,30];
// for(let i=0;i<5;i++){
//     console.log(numbers[i]);
// }
// function greet(name){
//     console.log("Hello, "+name);
// }
// let name="Dhruv";
// greet(name);

// function sum(i, j){
//     return i+j;
// }
// let i=20;
// let j=320;
// console.log(sum(i,j));

// function sum(i, j){
//     return i+j;
// }
// let i=20;
// let j=320;
// console.log(sum("20","320"));

// function canVote(age){
//     if(age>=18){
//         console.log("Yes, can vote");
//     }
//     else{
//         console.log("No, can't vote");
//     }
// }
// let age=50;
// canVote(age);
// age=10;
// canVote(age);

// function greet(user){
//     console.log("My name is: "+user.name+" ,age is: "+user.age);
// }
// let user={
//     name:"Dhruv",
//     age:10,
// }
// greet(user);

// function greet(user){
//     for(let i=0;i<2;i++){
//     console.log("Hello, "+((user[i].gender=="Male")?"Mr ":((user[i].gender=="Female")?"Mrs ":"Others "))+user[i].name+" .Age: "+user[i].age+" .Eligibility for voting"+((user[i].age>=18)?" Yes":" No"));
    
// }
// }
// let user=[{
//     name:"Dhruvika",
//     age:36,
//     gender:"Female",
// },{
//     name:"Dhruv",
//     age:19,
//     gender:"Male",
// }]

// greet(user);

// let user=[{
//     name:"Dhruv",
//     country:[
//         "india", "usa", "america", 
//         {city:[
//             "mzn", "dl", "jk", "bom"
//         ]}
//     ]
// }]
// console.log(user[0].country[3].city[2]);
function k(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].age>=18){
            console.log( arr[i]);
        }
    }
}
let arr=[{name:"Dhruv",age:19},{name:"Riya",age:13},{name:"Ankush",age:42},{name:"Esha",age:40},{name:"Ashok",age:70},{name:"Luxmi",age:65}];
k(arr);