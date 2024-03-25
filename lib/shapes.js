class Triangle {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x = "150" y = "150" text-anchor = "middle"  font-size = "60" fill = "${this.color}">${this.text}</text></svg>`
    }
}

class Circle {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><shape="circle" fill="${this.shapeColor}" /><text x = "150" y = "150" text-anchor = "middle"  font-size = "60" fill = "${this.color}">${this.text}</text></svg>`
    }
}

class Square {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><shape="square" fill="${this.shapeColor}" /><text x = "150" y = "150" text-anchor = "middle"  font-size = "60" fill = "${this.color}">${this.text}</text></svg>`
    }
}

module.exports = {Triangle}
module.exports = {Circle}
module.exports = {Square}
