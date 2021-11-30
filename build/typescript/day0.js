"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day0 = void 0;
const fs = require('fs'), example = `${fs.readFileSync('./src/ts/data/0_example.txt')}`, ex_sol = `${fs.readFileSync('./src/ts/data/0_example_solution.txt')}`, problem = `${fs.readFileSync('./src/ts/data/0_problem.txt')}`;
function approach(val) {
    return val.split('').reverse().join('');
}
const Day0 = {
    id: 0,
    label: 'test day',
    problem_data: problem,
    example_data: example,
    example_solution: ex_sol,
    approach
};
exports.Day0 = Day0;
