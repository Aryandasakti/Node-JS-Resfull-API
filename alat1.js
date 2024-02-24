
const { calculate } = require('./calc.js');


const squareResult = calculate('square', 5);
console.log(`Area di square 5:`, squareResult.area);
console.log(`Perimeter di square 5:`, squareResult.perimeter);

const rectangleResult = calculate('rectangle', 3, 6);
console.log(`area persegi panjang dengan panjang 3 dan lebar 6:`, rectangleResult.area);
console.log(`Perimeter persegi panjang dengan panjang 3 dan lebar 6:` , rectangleResult.perimeter);

// i dont know if this is the correct one tpi md2han bener capek bolak balik yt liat tutorial yg berbahasa inggris hehe

