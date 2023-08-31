const shapes = require("./Shapes");

class circle extends shapes {
  render() {
    return ` <svg height="500" width="500">
            <circle cx="250" cy="250" r="250" fill="${this.shape_color}"/>
            <text fill="${this.char_color}" font-size="75" x="-150" y="250" />${this.char_text}</text>
            </svg>`;
  }
}

module.exports = circle;
