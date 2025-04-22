let myNums = [1,3,6,2,5,2,9,]
myNums.push(7)
console.log(myNums);
myNums.unshift(10)
console.log(myNums)
myNums.pop(5)
console.log(myNums)
let count = 0;
myNums.forEach(items=>count+=items)

console.log({count});

const total = myNums.reduce((Acc ,items)=>Acc + items ,0)
console.log({total})

let mutiples = [];
for( let i = 0;i< myNums.length;i++){
    mutiples.push(myNums[i])
}
console.log(mutiples)


function reversedArr(arr){
    var left = 0
    var right = arr.length-1
    while(left , right){
        [arr[left],arr[right]] = [arr[right] , arr[left]]
        right --;
        left ++;
        
    }return arr
   

}
let arr = [1,2,3,4,5,6]
console.log(reversedArr(arr))


function reverse(Arr){
    var left = 0
    var right = Arr.length-1
    while(left,right){
        [Arr[left],Arr[right]] = [Arr[right],Arr[left]]
        right --;
        left ++;

    } return Arr
}
let Arr = ["dog","cat","goat","monkey"];
console.log( reverse(Arr));


function myReversed(text){
    var left = 0
    var right = text.length -1
    while(left,right){
        [text[left],text[right]]= [text[right],text[left]];
        left++;
        right--;

    }return text

}
let text = ['i' ,'love' ,'coding'];
console.log(myReversed(text))

//On your website’s sign-up form, users often type their names in all lowercase, uppercase,or with extra spaces. For example, 
// someone might enter “alice” instead of “Alice”. You want the system to clean up the name before using it. After processing 
// the name, the system should display: Welcome, Alice.


function clearName(name){
    const clear = name.trim().charAt(0).toUpperCase() + name.trim().slice(-4).toLowerCase()
   return ` Welcome, ${clear}`
}
let word = "PeteR"


console.log(clearName(word));

function cleanWord(words){
    const clean = words.trim().charAt(0).toUpperCase() + words.trim().slice(1).toLowerCase()
    return `Congrats, ${clean}`
}
let clean = "Amuor"
console.log(cleanWord(clean))


function removeVowels(str){
    return str.replace(/[aeiou]/gi,"")
}
let str = "I love learning"
console.log(removeVowels(str))

function findVowels (str){

  const myVowels =  str.match(/[aeiou]/gi)
  return myVowels ? myVowels.length: 0;
    

}
let sentence = "I love coding"
console.log(findVowels(sentence))

//Create a function that capitalizes the first letter of each word in a sentence

function toTitlecase(title){
    return title.split(' ').map(title =>title.charAt(0).toUpperCase() + title.slice(1)).join(' ')
}
const title = "The girl with louding voice"
console.log(toTitlecase(title))

function smallLetters(txt){
    return txt.split(' ').map(txt => txt.charAt(0).toLowerCase() + txt.slice(1).toUpperCase()).join(' ')
}
const txt = "i love eating"
console.log (smallLetters(txt))


function removeVowels(txt){
    return txt.toLowerCase().replace(/[aeiou]/)

}
let t = "i learned cooking"
console.log (removeVowels(t))

function chatBot(str){
let t = str.toLowerCase()
if(t.includes("help")){
return "am here for you"
}else return "How else can i assist "
    

}
console .log(chatBot("i need you"))

function checkEmail(email){
    let h = email.toLowerCase()
    if(h.includes("@")||endsWith(".com")){
        return "Thanks for subscribing"
    }
    else{
        return "please enter a valid email address"
    }
}
console.log(checkEmail("mangaramuor@gmail.com"))

function signUp(credentials){
    const v = credentials.toLowerCase()
    if(v.includes("yes")){
        return "choose to continue"
    }
    else return "stop"
}
console.log (signUp("hey yup"))

function capital(v){
    return v
}
function add(num1,num2){
    return num1 + num2
}
console.log (add(5,8))

function findMaxMin(arr){
    return Math.max(...arr)
}
let x = [2,4,7,4,8,9]
console.log(findMaxMin(x))

function minV(arr){
    return Math.min(...arr)

}
let z = [2,4,7,4,8,9]
console.log(minV(z))

function isPalidrome(str){
    return str === str.split("").reverse().join("")
}
console.log(isPalidrome("madam"))

function isEven(numbers){
    return numbers.filter(num => num%2===0)
}
let p = [3,4,7,5,8,92,0]
console.log(isEven(p))
