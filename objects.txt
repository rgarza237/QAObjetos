class Shape {
    constructor(color="azul", filled=false ) {
        this._color = color
        this._filled = filled
    }
    getColor(){
        return this._color
    }
    setColor(newColor){
        this._color = newColor
    }
    getFilled(){
        return this._filled
    }
    setFilled(newFilled){
        this._filled = newFilled
    }
    getArea(){
        return
    }
    getPerimeter(){
        return
    }
    toString(){
        return `Shape[color=${this._color}, filled=${this._filled}]`
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
    getPerimeter(){
        super.getPerimeter()
        return 2*(3.14 * this.radius)
    }
    getArea(){
        super.getArea()
        return 3.14 * (this.radius * this.radius)
    }
    toString(){
        super.toString()
        return `Circle[Shape[color=${this.getColor()}, filled=${this.getFilled()}], radius=${this.radius}, perimeter=${this.getPerimeter()}, area=${this.getArea()}]`
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
    getPerimeter(){
        super.getPerimeter()
        return (2*this.width)+(2*this.length)
    }
    getArea(){
        super.getArea()
        return this.width * this.length
    }
    toString(){
        super.toString()
        return `Rectangle[Shape[color=${this.getColor()}, filled=${this.getFilled()}], width=${this.width}, length=${this.length}, perimeter=${this.getPerimeter()}, area=${this.getArea()}]`
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
    getPerimeter(){
        super.getPerimeter()
        return this.side*4
    }
    getArea(){
        super.getArea()
        return this.side * this.side 
    }
    toString(){
        super.toString()
        return `Square[Rectangle[Shape[color=${this.getColor()}, filled=${this.getFilled()}],width=${this.width}, length=${this.length}], side=${this.side}, perimeter=${this.getPerimeter()}, area=${this.getArea()}]`
    }
}

class Triangle extends Shape{
    constructor(width, height){
        super()
        this.width = 1.0
        this.height = 1.0
    }
    getWidth(){
        return this.width 
    }
    setWidth(newWidth){
        this.width = newWidth
    }
    getHeight(){
        return this.height 
    }
    setLength(newHeight){
        this.length = newHeight
    }
    getPerimeter(){
        super.getPerimeter()
        return (2*this.height) + this.width
    }
    getArea(){
        super.getArea()
        return (this.width * this.height)/2
    }
    toString(){
        super.toString()
        return `Triangle[Shape[color=${this.getColor()}, filled=${this.getFilled()}], width=${this.width}, length=${this.height}, perimeter=${this.getPerimeter()}, area=${this.getArea()}]`
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
const triangle = new Triangle()
console.log(triangle.toString())

//console.log(newCircle.setRadius(2))
//console.log(newCircle.getRadius())
