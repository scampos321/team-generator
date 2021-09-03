const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name,id,email)
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getName(){
        return this.name;
    }

}

module.exports = Manager;