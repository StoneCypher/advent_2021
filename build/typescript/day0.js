"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = exports.test_solution = exports.approach = void 0;
const fs = require('fs'), example = fs.readFileSync('./data/0_example.txt'), ex_sol = fs.readFileSync('./data/0_example_solution.txt'), problem = fs.readFileSync('./data/0_problem.txt');
function approach(val) {
    return val.split('').reverse().join('');
}
exports.approach = approach;
function test_solution() {
    return approach(example) === ex_sol;
}
exports.test_solution = test_solution;
function solution() {
    return {
        id: 0,
        val: approach(problem)
    };
}
exports.solution = solution;
