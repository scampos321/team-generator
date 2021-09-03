const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test("Can instatiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
    });
});