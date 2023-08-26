const circle = require('../circle');

describe("circle", () => {
    describe("render", () => {
        it("should throw an error when called", () => {
            //arrange
            const circ = new circle();
            const err = "child class must implement render() method.";

            //assert
            expect(circ.render).toThrow(err);

        });
    });
});