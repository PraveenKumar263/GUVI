class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

var c1 = new circle(1.0, "red");
c1.setRadius(2);
console.log(c1.getRadius());
c1.setColor("blue");
console.log(c1.getColor());
console.log(c1.getArea());
console.log(c1.toString());
console.log(c1.getCircumference());