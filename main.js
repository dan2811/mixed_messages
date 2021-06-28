

const locations = ['Barking Abbey', 'the Olympic Park', 'Hyde Park', 'Barking Park'];
const times = ['15 minutes', '30 minutes', '45 minutes', '1 hour'];
const toys = ['frisbee', 'tennis ball', 'rope toy', 'bottle of water'];

let randPlace = locations[Math.floor(Math.random()*4)];
let randTime = times[Math.floor(Math.random()*4)];
let randToy = toys[Math.floor(Math.random()*4)];


//Testing random generators.
console.log(randPlace, randTime, randToy);