const Employee = require('../lib/Employee');

describe('Employee', () => {
    test("Can instatiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

    test("Can set name via constructor arguements", () => {
        const name = "Sebastian";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    test("Can set name via constructor arguements", () => {
        const testValue = "seb.campos03@gmail.com";
        const e = new Employee("Test", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    test("Can get name using getName()", () => {
        const testValue = "Sebastian";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});