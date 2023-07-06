console.log('geometry');

const point1 = new Point(3, 4);

console.log(point1);

const segment1 = new Segment(1, 1, 4, 5);

console.log(segment1);
console.log(segment1.length);

const triangle1 = new Triangle(1, 1, 4, 5, 4, 1);
console.log(triangle1);
console.log(triangle1.perimeter);

const client1 = new Client('pippo', 'de pippis', 'via pippolis 27');

console.log(client1.toString());

const employee1 = new Employee('pluto', 'de pippis', 'animali');

console.log(employee1.toString());