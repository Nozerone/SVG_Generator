const shapes = require("../lib/shapes");
const circle = require("../circle");
const square = require("../square");
const triangle = require("../triangle");

//circle test
describe("circle", () => {
  test("Renders Correctly", () => {
    const shape = new Cirle();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(`<svg height="500" width="500">
    <circle cx="250" cy="250" r="250" fill="${this.shape_color}/>
    <text fill="${this.char_color}" font-size="75" x="-150" y="250" />${this.char_text}</text>
    </svg>`);
  });
});
