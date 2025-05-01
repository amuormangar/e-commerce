const person = {
    name:'Jane',
    age:20,
    greet:function(){
        console.log('Inside person',this)
        console.log(`Hello there ${this.name}`)
    }
}
console.log[person.age]
console.log(person["age"])
person.nationality = 'Ethiopia';
console.log(person)
person.age = 23
console.log({person})
delete person.nationality;
console.log({person})
person.greet()

person.introduce = ()=>{
    // console.log('inside arrow fn',this)
    console.log(`My name is ${person.name} and I am ${person.age} years old`)
}
person.introduce()


function studentScores(students){
return students.filter(students =>students.scores >= 50)
}
const scoreList = [
    {name:'Max',scores:60},
    {name:"Jane",scores:34},
    {name:"Mary",scores:80},
    {name:"Peter",scores:50},
    {name:"Paul",scores:40}
    
]
console.log(studentScores(scoreList))

function studentScores(students){
    let arr = []
    students.forEach(students => {
        if(students.score >= 50){
            arr.push(students)
        }
        
    })
    return arr
}
const scores = [
    {name:'Max',scores:60},
    {name:"Jane",scores:34},
    {name:"Mary",scores:80},
    {name:"Peter",scores:50},
    {name:"Paul",scores:40}
    
]
console.log(studentScores(scores))

function Car(color,name){
    this.name = name;
    this.color = color;
    this.introduce = function(){
        return `This is a ${this.name} and it is ${this.color} in color`
    }
}
const car = new Car("red","Mercedes")
console.log(car)
console.log(car.introduce())




// ASSIGNMENT
//Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that increases the balance and logs the new balance, and another method withdraw(amount) that decreases the balance only if there are enough funds. Create 3 user accounts and simulate deposits and withdrawals.

// pseudocode
// 1.Create bankAccount constructor with objects [name,balance]
// 2.Add a method deposit taking in the amount
// 3.In the deposit method ,add balance and amount to get the new balance
// 4.Then create a method to  subtract withdrawawals from the current balance

function BankAccount(name,balance){
    this.name = name
    this.balance = balance
    this.deposit = function(amount){

    return this.balance += amount
    }
    this.withDraw = function (amount){
        if(amount >=balance){
          return  this.balance-=amount
        }
           
    }
}
const personBalance = new BankAccount("Paul" , 790)
console.log(personBalance.deposit(9000)) 

console.log(personBalance.withDraw(4000))

const personAccount = new BankAccount ("Mary",40000)
console.log(personBalance.deposit(60000))
console.log(personBalance.withDraw(2000))

const personBalance2 = new BankAccount("Amuor" , 79990)
console.log(personBalance.deposit(90000)) 
console.log(personBalance.withDraw(4000))









// Create an object taskList with a property tasks (an array of task names). Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() to print all remaining tasks. Test the object with 4–5 tasks and demonstrate the functionality of each method.


function TaskList (){
    this.tasks = []
    this.addTask = function(task){
        this.tasks.push(task)
        console.log(`The ${task} has beeen added`)
    }
this.completeTask(task)=function(task){
    this.task = this.tasks.filter(task =>task !==task)
    console.log(`${task} completed`)
}
this.listTasks = function (){
    return this.tasks
}   
}
const myTask = new TaskList()
myTask.addTask('go shopping')
myTask.addTask('doing assignment')
myTask.completeTask(`cooking lunch`)
console.log(myTask.listTasks)
   

//Create a Student object with name, scores (an array), and a method getAverage() that returns the average score. Add another method hasPassed() that returns true if the average is 50 or more, otherwise false. Create and test this for at least two students.


function Student(name,scores){
    this.name = name
    this.scores = scores
    this.getAverage = function(){
        let sum = 0;
        for(let i = 0; i < this.scores.length;i++){
            sum+= this.scores[i]
        }
        return sum/scores.length;
    }
    this.hasPassed = function(scores){
    scores.filter(scores =>scores >=50)
    return true
    }
}
const studentsScores = new Student({name:'Max',scores:[60,8,90,50,30,67]})
console.log(studentsScores.getAverage())
console.log(studentsScores.hasPassed())



//Create a ShoppingCart object with a property items (an array of item objects with name and price). Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart. Add 3 items and print the final total.


function ShoppingCart(item,price){
    this.item = item
    this.price = price
    this.addItems = function(item){
        this.item+= item
    }
    this.getTotal = function(){
        let sum = 0;
        for(let i = 0; i < this.prices.length;i++){
            sum+= this.prices[i]
        }
        return sum
    }
    }
    const shoppingList = new ShoppingCart [
        {item:'coffee',price:345},
        {item:'yoghurt',price:300},
        {item:'Amara lotion',price:478}
                  ]
    console.log(shoppingList.addItems( {item:'sweet',price:345}))


    //Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000, and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.









    
