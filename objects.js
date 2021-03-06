class Shape {
    constructor(color="red", filled=true ) {
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
    constructor(radius=1.0){
        super()
        this._radius = radius
    }
    getRadius(){
        return this._radius 
    }
    setRadius(newRadius){
        this._radius = newRadius
    }
    getPerimeter(){
        super.getPerimeter()
        return 2*(3.14 * this._radius)
    }
    getArea(){
        super.getArea()
        return 3.14 * (this._radius * this._radius)
    }
    toString(){
        super.toString()
        return `Circle[Shape[color=${this.getColor()}, filled=${this.getFilled()}], radius=${this._radius}]`
    }

}

class Rectangle extends Shape{
    constructor(width=1, length=1){
        super()
        this._width = width
        this._length = length
    }
    getWidth(){
        return this._width 
    }
    setWidth(newWidth){
        this._width = newWidth
    }
    getLength(){
        return this._length 
    }
    setLength(newLength){
        this._length = newLength
    }
    getPerimeter(){
        super.getPerimeter()
        return (2*this._width)+(2*this._length)
    }
    getArea(){
        super.getArea()
        return this._width * this._length
    }
    toString(){
        super.toString()
        return `Rectangle[Shape[color=${this.getColor()}, filled=${this.getFilled()}], width=${this._width}, length=${this._length}]`
    }
}

class Square extends Rectangle{
    constructor(side=1){
        super()
        this.side = side
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
        return `Square[Rectangle[Shape[color=${this.getColor()}, filled=${this.getFilled()}],width=${this.getWidth()}, length=${this.getLength()}]]`
    }
}

class EquilateralTriangle extends Shape{
    constructor(sideLength=1){
        super()
        this._sideLength = sideLength
    }
    getsideLength(){
        return this._sideLength 
    }
    setsideLength(newsideLength){
        this._sideLength = newsideLength
    }
    getPerimeter(){
        super.getPerimeter()
        return 3*this._sideLength
    }
    getArea(){
        super.getArea()
        return Math.sqrt(3) / 4 * (this._sideLength * this._sideLength)
    }
    toString(){
        super.toString()
        return `Triangle[Shape[color=${this.getColor()}, filled=${this.getFilled()}], sideLength=${this._sideLength}]`
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
const triangle = new EquilateralTriangle()
console.log(triangle.toString())

//console.log(newCircle.setRadius(2))
//console.log(newCircle.getRadius())
