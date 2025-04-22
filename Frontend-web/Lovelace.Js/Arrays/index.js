const students = ["Jane","Amanda","Mary"]
console.log({students})
//Resign value
students[1]="Tom";
console.log({students});;
//Adding items
students.push("Susan");
console.log("students");

students.unshift("Anne");
console.log({students})

students.pop("Anne");
console.log("students")


//Loops
let nums = [10,20,30,40];
const double = nums.map (item=>item*2);
console.log({double});


//sum of all elements
let count = 0;
nums.forEach(item=>count+=item);
console.log({count});

const total = nums.reduce((acc,item) => acc + item,0);
console.log({total});

//for loop
let mutiples =[];
for(let i = 0;i< nums.length;i++){
    mutiples.push(nums[i]*nums[i])
}
console.log({mutiples});

const items = [5,2,8,9,1,12,15];
const even = items.filter(item=>item%2==0);
console.log({even});

const discover = items.find(item =>item ==1);
console.log({discover});

//Destructuring
const [a,b,...c] = nums;
console.log({a});
console.log({b});
console.log({c});

let prime = []
let number = [3,5,7,9,1,5,11]
if(number >1){
    prime.push()
}
console.log({prime})

const myNum = [2,9,4,6,8]
let myTotal = myNum.reduce((acc,item)=> acc + item,0)
console.log(myTotal)


let fruits = ["mango","banana","apple"]
let index = fruits.indexOf("guava")
 if(index === -1){
    console.log("it does not exist")
 } else {console.log("it exist")}


 let arr = [1,2,3,4,5,6]
 console.log(arr.splice(3,3,7,8,9))
 console.log(arr)

 let arr1 = [7,8,9,0,2,84,32]
 console.log(arr1.length)
 console.log(arr1[6])

 let arr2 = [2,"boy",8.4,"school",2,5,"cow"]
 let string1 = []
 arr2.forEach(item =>{
    if( typeof item !== "string")
        string1.push(arr2)
 })
console.log(string1)

function removeString (arr){
    arr.filter(items => typeof items === 'string')
    return arr
}
let mixedArr3 = [2,4,5,true,null,]
const filteredArr = removeString(mixedArr3)
console.log(filteredArr)

function userPassword(password){
    let typedPassword = password.trim().toLowerCase()
    let storedPassword = password.trim().toLowerCase()
    return typedPassword === storedPassword
}
console.log(userPassword("PASSword123"))


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())

ages.sort(function(a,b){
    return b - a
})
console.log(ages)

function studentsScore(students){
    return students.sort((a,b) => b- a)
}

let scores = [3,6,7,2,1,9]
console.log(studentsScore(scores))




function findLongestName(arr){
    let longest = ""
    arr.forEach(name =>{
        if(name.length > longest.length)
            longest = name
    })
    return longest
}
let arr7 = ["Amor","Eyrusalem","Eve"]
console.log(findLongestName(arr7))


function  useFind(guests){
    let name = "Alice"
    if(guests.find(guest => guest === name)){
        return  `${name}  `
        
    }
    else {
        return `${name} not found` 
    }
}
console.log(useFind(["Ali","Alicia",'Adam',"Amuor"]))

