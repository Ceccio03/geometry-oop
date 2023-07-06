class Segment {
    constructor(xA, yA, xB, yB) {
        this.pointA = new Point(xA, yA);
        this.pointB = new Point(xB, yB);
    }

    getLength() {
        
    }

    static fromPoints(pointA, pointB) {
        const newSegment = new Segment(pointA.x, pointA.y, pointB.x, pointB.y);

        return newSegment;
    }
}