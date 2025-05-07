// let person = {
//     Fname:"Vatsal",
//     Lname:"Kanodia",
//     age:21,
//     subject:{
//         sub1:"Java",
//         sub2:"JavaScript"
//     },
//     fullName: function(){
//        return this.Fname + " " + this.Lname; 
//     }


// }


// console.log(person);
// // console.log(person.subject.sub1);
// // console.log(person.subject.sub2);
// // console.log(person.subject);
// console.log(person["subject"]);

// console.log(person["name"]);



// console.log(person.fullName());

// let value = Object.values(person);
// let entries = Object.entries(person)

// console.log(value);
// console.log(entries);

// let num = [10,20,30,40,50];
// let arr = num.splice(1,4,3,4,5);
// console.log(arr);

// console.log(num);

// let num = [10,20,30,40];
// let arr = num.slice(1,3);
// console.log(arr);
// console.log(num);


// let num1 = [10,20,30];
// let num2 = [40,50,60];

// let merge = num1.concat(num2);

// console.log(merge.length);



// let person = {
//     name:"Ashutosh",
//     age:24,

// }

// console.log(person.name);
// console.log(person["age"]);


// let user = {Name:"vatsal"};
// Object.freeze(user)
// user.Name = "Ashutosh";
// console.log(user.Name); 


// let person = {Name:"vatsal" , Age:24};
// let person2 =  Object.keys(person)
// console.log(person2);

// let arr = {a:1 , b:2};
// console.log(Object.values(arr));
// console.log(Object.entries(arr));`


// let user = [{Name:"Vatsal"} , {Name:"Shiv"}]
// let name = user.map((u) => u.Name );
// console.log(name);

// let Students = {
//     Name:"vatsal",
//     Address:{
//        city:"Ahmedabad",
//        country:"India" 
//     }
    
// }


// console.log(Students.Address.city);
// console.log(Students.Address.country);

// let obj = {};
// let isEmpty = Object.keys(obj).length === 0;
// console.log(isEmpty);

// let marks = {"English":80,"Maths":76,"Science":67};

// let total = Object.values(marks).reduce((acc,mark)=>acc+mark , 0);

// console.log(total);


// let params = {name:"Vatsal" , Age:21};
// let obj = Object.entries(params).map(([k,v]) => `${k}=${v}`).join("&");
// console.log(obj);


// let data = {a:1,b:2,c:3};
// let obj1 = Object.fromEntries(Object.entries(data).filter(([k,v])=>v>1));
// console.log(obj1);

// let Student = {
//     name:"vatsal"
// }

// Student.marks = 89;

// console.log(Student);

// let user = {Name:"Vatsal" , age:21};

// delete user.age;

// console.log(user);


// let car = {
//     Brand:"Toyota",
//     Color:"Navy green",
//     Price:5000000,
// }

// console.log("Brand" in car);
// console.log("Model" in car);
// console.log("Price" in car);


// let Book = {Name:"Master React.js" , Author:"Jordan Walke" , Publication : "Meta Tech Pvt Ltd"};

// for(let Keys in Book){
//     console.log(Keys + " :- " + Book[Keys])
// }



// let obj = {a:1,b:2,c:3};
//   console.log(Object.keys(obj).length);  


// let person = { name: "Amit", age: 25 };
// let entries = Object.entries(person);
// console.log(entries);


// let a = { x: 1 };
// let b = { y: 2 };
// let merged = { ...a, ...b };
// console.log(merged);


// let original = { name: "Ravi" };
// let copy = { ...original };
// console.log(copy);

