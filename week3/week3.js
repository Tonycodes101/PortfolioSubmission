//employee function
function EmployeeInfo(name,salary){
    console.log("Welcome " + name + " your salary is " + salary);
}

console.log("This is my first programme");
var EmpName ="Tony"
var EmpSalary = 60000

EmployeeInfo(EmpName,EmpSalary)

const Empskill = (myskill) => {
  console.log("expert in "+ myskill)
}

Empskill("Python")

const student = require('./StudentInfo');  
const person = require('./Person');        

console.log("Student Name: " + student.getName());

console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )

person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")