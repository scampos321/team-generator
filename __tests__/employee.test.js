const Employee = require('../lib/Employee');

describe('Employee', () => {
    test("Can instatiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });
});