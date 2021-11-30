
type Day = {

  id               : number,
  label            : string,

  problem_data     : string;

  example_data     : string;
  example_solution : string;

  approach         : (data: string) => string;

};





export { Day };
