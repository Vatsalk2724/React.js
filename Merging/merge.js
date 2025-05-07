// let a = [3,4];
// let b = [5,6];

// let merge = a.concat(b);

// console.log(merge);


// let a = [3,4];
// let b = [5,6]
// b.forEach(item => {
//     a.push(item);
// });

// console.log(a);


// let person = {Name:"Vatsal" , age: 21};
// let course = {course:"full stack development"};
// let degree = {degree:"Bachelor of Computer Application"};
// let merge = {...person, ...course , ...degree};
// console.log(merge);


// let obj1 = {a:1}
// let obj2 = {b:2,c:3}
// let merge = {...obj1,...obj2};
// console.log(merge);

// let obj1 = {user:{name:"raj"}}
// let obj2 = {user:{age:21}}
// let merge = {user:{...obj1.user , ...obj2.user}};
// console.log(merge);

// function mergeArray(a,b) {
//     return [...a , ...b];

// } 

// console.log(mergeArray([1],[2]));


// function mergeObject(o1,o2) {
//     return {...o1,...o2};

// } 

// console.log(mergeObject({a:1},{b:2}));


// function mergeObject(person,course){
//     return {...person , ...course};
// }

// console.log(mergeObject({name:"Vatsal"},{course:"full Stack Development , UX/UI Designer"})); 


// let arr = [[1],[2],[3]];
// let merged = arr.reduce((acc,val) => acc.concat(val) , [])
// console.log(merged);

// let x = [4,2];
// let y = [3,1];

// let merge = [...x , ...y].sort();

// console.log(merge);

// let user1 = [{name:"A"}];
// let user2 = [{name:"B"}];
// let allUser = [...user1 , ...user2];
// console.log(allUser);


// let a = [1,2];
// let b = [3,4];

// let result = [...a,...b].filter((n) => n>2);

// console.log(result);

// let x = [1,2];
// let y = [3,4];
// let merge = [...x,...y];
// console.log(merge);


// let base = [1,2];
// let extra = true?[3]:[];
// let merge = [...base , ...extra];
// console.log(merge);

// let a = ["red"];
// let b = ["green"];
// let c = ["white"];

// let merge = [...a,"Yellow",...b,...c];
// console.log(merge);

// let obj1 = {name:"Vatsal"};
// let obj2 = {age:25};
// let mergeObj = {...obj1,...obj2};
// console.log(mergeObj);

// let city = "Ahmedabad";
// let country = "India";
// let address = Object.assign({},city,country);

// console.log(address);

// let nested1 = [[1,2]];
// let nested2 = [[3,4]];
// let merge = [...nested1,...nested2];
// console.log(merge);

// let a = []
// let b = [5,6]
// let result = [...a,...b];
// console.log(result);

// let num1 = [1,2];
// let num2 = [3,4];
// let combined = [...num1,...num2];
// console.log(combined);

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let uniqueMerge = [...new Set([...arr1, ...arr2])];
// console.log(uniqueMerge);