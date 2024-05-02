
// const Shape = require('./shapes');
const {Square, Triangle, Circle} = require('./shapes');


// Square shape test

// Square shape test
describe('Square', () => {
    it('should render correctly',() => {
        const shape = new Square("orange", "black", "PPP");
        const output = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" rx="10" ry="10" width="200" height="200" style="fill:orange"/><text x="150px" y="150px" font-size="60px" text-anchor="middle" dominant-baseline="middle" fill="black">PPP</text></svg>`;
        expect(shape.render()).toEqual(output);
    });
});


// Triangle shape test

describe('Triangle', () => {
    it('should render correctly', () => {
        const shape = new Triangle("orange", "black", "PPP");
        const output = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150,50 250,250 50,250" style="fill:orange"/><text x="150px" y="180px" font-size="60px" text-anchor="middle" dominant-baseline="middle" fill="black">PPP</text></svg>`;
        expect(shape.render()).toEqual(output);
    });
});

//Circle shape test

describe('Circle', () =>{
    it('should render correctly', () => {
        const shape = new Circle("orange", "black", "PPP");
        const output = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" style="fill:orange"/><text x="150px" y="150px" font-size="60px" text-anchor="middle" dominant-baseline="middle" fill="black">PPP</text></svg>`;
        expect(shape.render()).toEqual(output);
    });
});