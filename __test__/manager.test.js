const Employee = require("../lib/Employee")

describe ("Tests to see if Employees Exist", () => {
    it ("should be an object", ()=> {
        const employeeObject = new Employee();
        expect(typeof(employeeObject)).toBe('object');
    })
})