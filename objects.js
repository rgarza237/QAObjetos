class Shape {
    constructor(color, filled ) {
        this.color = "azul"
        this.filled = false
    }
    getColor(){
        return this.color
    }
    setColor(newColor){
        this.color = newColor
    }
    isFilled(){
        return this.filled
    }
    setFilled(newFilled){
        this.filled = newFilled
    }
    getArea(){
        return
    }
    getPerimeter(){
        return
    }
    toString(){
        return `Shape[color=${this.color}, filled=${this.filled}]`
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = 1.0
    }
    getRadius(){
        return this.radius 
    }
    setRadius(newRadius){
        this.radius = newRadius
    }
    toString(){
        super.toString()
        return `Circle[color=${this.color}, filled=${this.filled}, radius=${this.radius}]`
    }
}

const shape = new Shape()
console.log(shape.toString())
const newCircle = new Circle()
console.log(newCircle.toString())

console.log(newCircle.setRadius(2))
console.log(newCircle.getRadius())
