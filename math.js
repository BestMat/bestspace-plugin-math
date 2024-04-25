// ©2024 - BestSpace - BestDeveloper - BestMat, Inc. - All rights reserved.

var plugin = {
    name: "math",
    product: "bestspace",
    version: 1,
    language: "javascript"
};

function sum (x, y) {
    return x + y;
}

function difference (x, y) {
    return x - y;
}

function product (x, y) {
    return x * y;
}

function quotient (x, y) {
    return x / y;
}

function remainder (x, y) {
    return x % y;
}

function exponent (x, y) {
    return x ** y;
}

module.exports = { plugin, sum, difference, product, quotient, remainder, exponent }