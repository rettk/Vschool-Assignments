var employees = []

function CreateEmployee(Name, JobTitle, Salary, Status) {
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = ("Full Time")
}

CreateEmployee.prototype.printEmployeeForm = function () {
    console.log(this.Name + ", " + this.JobTitle + ", " + this.Salary + ", " + this.Status)
}

var bob = new CreateEmployee("Bob", "General Manager", 100000)
var gina = new CreateEmployee("Gina", "Salesperson", 40000,)
var susy = new CreateEmployee("Susan", "Receptionist", 35000, "Part Time")

bob.printEmployeeForm()
gina.printEmployeeForm()
susy.printEmployeeForm()


employees.push(bob)
employees.push(gina)
employees.push(susy)

console.log(employees)

