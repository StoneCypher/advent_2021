
import { writeFileSync }  from 'fs';
import chalk              from 'chalk';

import { version, built } from './generated_code/version';

import { Days }           from './days';





const start : string = '<!doctype html><html><head><title>My solutions</title><link rel="stylesheet" type="text/css" href="index.css" /></head><body><table><tr><th>id</th><th>label</th><th>result</th></tr>\n',
      end   : string = '\n\n</table></body></html>';

let guts : string = `<p>Version ${version}, built ${new Date(built).toLocaleString()} (${built})</p>\n`;





Days.forEach(day => {

  const res = day.approach(day.problem_data);

  guts += `
  <tr>
    <td>${day.id}</td>
    <td>${day.label}</td>
    <td>${res}</td>
  </tr>`;

  console.log(
    chalk.green(`Day ${day.id.toString().padEnd(2, ' ')} : `) +
    chalk.cyanBright(`${res}`)
  );

});





writeFileSync('./docs/solutions.html', `${start}${guts}${end}`);
