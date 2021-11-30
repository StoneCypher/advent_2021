
import chalk from 'chalk';

import { Days } from './days';

const ReqDay : number = Number(`${process.argv[3]}`),
      SDay            = Days[ReqDay];





if (SDay === undefined) {
  throw `${chalk.redBright('No such day')} ${chalk.yellowBright(ReqDay.toString())}`;
}





const isPassing = SDay.approach(SDay.example_data) === SDay.example_solution,

      passText  = isPassing
                  ? chalk.greenBright('pass')
                  : chalk.redBright('fail'),

      solution  = isPassing
                  ? chalk.magentaBright(SDay.approach(SDay.problem_data))
                  : chalk.redBright(SDay.approach(SDay.problem_data))

console.log(`${chalk.cyan(`Day ${ReqDay}:`)}
  - ${chalk.gray('Example  :')} ${passText}
  - ${chalk.gray('Solution :')} ${solution}
`);
