const Intern = require('../lib/Intern');

describe('Intern', () => {
    test("Can instatiate Intern instance", () => {
        const e = new Intern();
        expect(typeof e).toBe("object");
    });
});
