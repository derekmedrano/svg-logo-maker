const {Triangle} = require ('./shapes');
const {Circle} = require ('./shapes');
const {Square} = require ('./shapes');

describe ("Triangle", () => {
    test ("Should render a triangle", () => {
        const shape = new Triangle ("HHH", "white", "blue")
        expect (shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x = "150" y = "150" text-anchor = "middle"  font-size = "60" fill = "white">HHH</text></svg>`)
    })
})

describe ("Circle", () => {
    test ("Should render a circle", () => {
        const shape = new Circle ("RRR", "blue", "orange")
        expect (shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><shape="circle" fill="orange" /><text x = "150" y = "150" text-anchor = "middle"  font-size = "60" fill = "blue">RRR</text></svg>`)
    })
})

