const shapes = require("/shapes.js");

class triangle extends shapes {
  render() {
    return ` <svg height="500" width="500">
            <rect width="100" height="100" fill="${this.shape_color}/>
            <text fill="${this.char_color}" font-size="75" x="-150" y="250" />${this.char_text}</text>
            </svg>`;
  }
}

module.exports = triangle;