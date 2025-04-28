import java.awt.Color

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
  val banker = Banker("Joan",42)
    banker.talk("Hello,what is your account number")
    banker.sleep()
    banker.eat()
    println(banker.countMoney(arrayOf(100,500,800)))

    val doctor = Doctor("John",35,"cardiology")
    doctor.talk("how are you feeling today")
    doctor.sleep()
    doctor.eat()
    doctor.treatPatient("Kamau","headache")

    val farmer = Farmer("Allan",28)
    farmer.talk("It is a harvesting season")
    farmer.sleep()
    farmer.eat()
    farmer.protest()
  println(farmer.payTax(arrayOf(12,54,7,24,90,40)))
    farmer.vote()
    farmer.cultivateLand()

    val subaru = Car("subaru", "legacy", "white", 18)
    subaru.carryPeople(19)
    subaru.identity()
    print(subaru.calculateParkingFees(50))
    var bus = Bus("bus","bongo","black",28)
    println(bus.maxTripFare(80.50))
}

class Banker( name: String,age:Int): Person(name,age){
    fun countMoney(notes: Array<Int>):Int{
        var sum = 0
        notes.forEach { note ->
            sum+=note
        }
        return sum
    }

}

class Doctor( name: String,age: Int, var specialition: String): Person(name,age){

    fun treatPatient(patient: String,illness: String){
        println("Treating $patient for $illness")
    }


}

class Farmer(name: String,age: Int): Citizen(name,age){

    fun cultivateLand(){
        println("dig dig dig")
    }

    override fun eat() {

        println("I am enjoying the fruit of my labour")
    }

}

open class Person( var name: String, var age : Int){
    fun talk(words: String){
        println(words)
    }
   open fun eat(){
        println("yum")
    }
    fun sleep(){
        println("zzzzzz")
    }
}

 open class Citizen(name: String,age: Int): Person(name,age){
    fun vote(){
      println("all the time")
    }
    fun protest(){
     println("Haki yetu")
    }
     fun payTax(taxes: Array<Int>): Int{
          var sum = 0

         taxes.forEach { tax ->
             sum+=tax
         }
         return sum
     }
}

 open class Car(var make: String, var model: String, var color: String, var capacity: Int){
    fun carryPeople(people: Int){

        if (people <= capacity){
            print("Carrying $people passengers")
        }
        else{
            var x = people-capacity
            println("Over capacity by $x people")
        }
    }
    fun identity(){

        println("I am $color $make $model")
        }
    fun calculateParkingFees(hours: Int): Int{

        return hours*20

    }
}

class Bus( make: String,  model: String,  color: String,  capacity: Int): Car(make,model,color,capacity){

    fun maxTripFare(fare: Double): Double{
       return capacity * fare
    }
}
