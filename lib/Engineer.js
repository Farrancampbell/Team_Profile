const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub
    }
    getRole(){
        return "Engineer"
        
    }
    getOfficeNumber(){
        return this.gitHub
    }
}