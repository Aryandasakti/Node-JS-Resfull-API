
function calculate(shape, ...args) {
    switch (shape) {
        case 'square':
            const side = args[0];
            const squareArea = side * side;
            const squarePerimeter = 4 * side;
            return { area: squareArea, perimeter: squarePerimeter };
        case 'rectangle':
            const length = args[0];
            const width = args[1];
            const rectangleArea = length * width;
            const rectanglePerimeter = 2 * (length + width);
            return { area: rectangleArea, perimeter: rectanglePerimeter };
        default:
            return 'Invalid shape';
    }
}

module.exports = {
    calculate
};
