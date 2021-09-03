const Manager = require('../lib/Manager');

describe('Manager', () => {
    test("Can instatiate Manager instance", () => {
        const e = new Manager();
        expect(typeof e).toBe("object");
    });

    test("Can set name via constructor arguements", () => {
        const name = ""
    })
});