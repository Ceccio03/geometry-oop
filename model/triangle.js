class Triangle {
    constructor(xA, yA, xB, yB, xC, yC) {
        this.segmentAB = new Segment(xA, yA, xB, yB);
        this.segmentBC = new Segment(xB, yB, xC, yC);
        this.segmentCA = new Segment(xC, yC, xA, yA);
    }

    get perimeter() {
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }

    get area() {
        const semiPerimeter = (this.segmentAB.length + this.segmentBC.length + this.segmentCA.length) / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.segmentAB.length) * (semiPerimeter - this.segmentBC.length) * (semiPerimeter - this.segmentCA.length));

        return area
    }

    get isRectangle() {
        if (this.segmentAB.length ** 2 === (this.segmentBC.length ** 2 + this.segmentCA.length ** 2)) {
            return true;
        } else if (this.segmentBC.length ** 2 === (this.segmentAB.length ** 2 + this.segmentCA.length ** 2)) {
            return true;
        } else if (this.segmentCA.length ** 2 === (this.segmentAB.length ** 2 + this.segmentBC.length ** 2)) {
            return true;
        } else {
            return false;
        }
    }
}