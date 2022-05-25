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
        return `Circle[Shape[color=${this.color}, filled=${this.filled}], radius=${this.radius}]`
    }
}

class Rectangle extends Shape{
    constructor(width, length){
        super()
        this.width = 1.0
        this.length = 1.0
    }
    getWidth(){
        return this.width 
    }
    setWidth(newWidth){
        this.width = newWidth
    }
    getLength(){
        return this.length 
    }
    setLength(newLength){
        this.length = newLength
    }
    toString(){
        super.toString()
        return `Rectangle[Shape[color=${this.color}, filled=${this.filled}], width=${this.width}, length=${this.length}]`
    }
}

class Square extends Rectangle{
    constructor(side){
        super()
        this.side = 1.0
    }
    getSide(){
        return this.side 
    }
    setSide(newSide){
        this.side = newSide
    }
    toString(){
        super.toString()
        return `Square[Rectangle[Shape[color=${this.color}, filled=${this.filled}],width=${this.width}, length=${this.length}], side=${this.side}]`
    }
}

const shape = new Shape()
console.log(shape.toString())
const newCircle = new Circle()
console.log(newCircle.toString())
const rectangle = new Rectangle()
console.log(rectangle.toString())
const square = new Square()
console.log(square.toString())

//console.log(newCircle.setRadius(2))
//console.log(newCircle.getRadius())
