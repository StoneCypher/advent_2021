
import { SolutionShape } from './types';





const fs      = require('fs'),
      example = fs.readFileSync('./data/0_example.txt'),
      ex_sol  = fs.readFileSync('./data/0_example_solution.txt'),
      problem = fs.readFileSync('./data/0_problem.txt');





function approach(val: string): string {
  return val.split('').reverse().join('');
}





function test_solution(): boolean {
  return approach(example) === ex_sol;
}





// facetious, there is no day 0
// this is here to get the rig running and define the answer shape

function solution(): SolutionShape {

  return {
    id  : 0,
    val : approach(problem)
  };

}





export {

  approach,
  test_solution,
  solution

};
