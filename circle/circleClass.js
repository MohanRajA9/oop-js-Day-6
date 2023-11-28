class circle{
    
    constructor (name,radius = 1.0,color = "red") {  // This is the Constructor which is like blue print for instances.
        this.n = name
        this.r = radius;
        this.c = color;   
    };

    get radius() {
        return (`The ${this.n} Radius is ${this.r}`);
    };

    set radius(radius) {
        this.r = radius;
        console.log(`The ${this.n} radius is changed`);
        console.log(`Now the radius is ${this.r}`);
    };

    get color() {
        return (`The ${this.n} colour is ${this.c}`);   
    };

    set color(color){
        this.c = color;
        console.log(`The ${this.n} color is changed`)
        console.log(`Now The color is ${this.c}`)
        return this.c;
    };

    toString () {
        return (`${this.n}[radius = ${this.r},color = ${this.c}]`)    
    }

    getArea () {
        return (`The area of the ${this.n} is: ${(3.14159*(this.r*this.r))}`)
    }

    getCircumference () {
        return (`The circumference of the ${this.n} is: ${((2)*(3.14159)*(this.r))}`)
    }
};
const circle1 = new circle("circle-1",);
const circle2 = new circle("circle-2",2);
const circle3 = new circle("circle-3",3,"blue");

console.log(circle2.radius); // Here I am getting the specefic Radius of The circle by using getter
console.log("                                     ")
circle2.radius=3 // Here I am changed the radius of The circle by using setter 
console.log("-------------------------------------")
console.log(circle1.color) // Here I am getting the color by using getter
console.log("                                     ")
circle1.color = "black" // Here I am changed the color by using setter  

console.log("-------------------------------------")
console.log(circle3.toString()) // it print's the circle's details in string

console.log("-------------------------------------")
console.log(circle2.getArea())
console.log("-------------------------------------")

console.log(circle2.getCircumference())
console.log("-------------------------------------")












