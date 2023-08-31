class shapes {
  constructor(color, text, charColor) {
    this.shape_color = color;
    this.char_text = text;
    this.char_color = charColor;
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.char_text = text;
  }
  setCharColor(charColor) {
    this.char_color = charColor;
  }
}

class Square extends shapes {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.shape_color}"/>`;
  }
}

class Triangle extends shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />`;
  }
}

class Circle extends shapes {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.shape_color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
