
import { unlinkSync, readFileSync, writeFileSync, existsSync } from 'fs';
import chalk                                                   from 'chalk';

import { gh_username, fullname, configured } from './config';
import { Days }                              from './days';

if (!(configured)) {

  console.log(chalk.bgRed(chalk.black('##############################################################')));
  console.log(chalk.bgRed(chalk.black('##############################################################')));
  console.log(chalk.bgRed(chalk.black('######                                                  ######')));
  console.log(chalk.bgRed(chalk.black('######  ') + chalk.white('Set up `') + chalk.yellowBright('%/src/ts/config.ts') + chalk.white('` before continuing.') + chalk.black('  ######')));
  console.log(chalk.bgRed(chalk.black('######                                                  ######')));
  console.log(chalk.bgRed(chalk.black('##############################################################')));
  console.log(chalk.bgRed(chalk.black('##############################################################')));

  throw 'You need to write the three values in `%/src/ts/config.ts` before proceeding.';
}

const rme = `${readFileSync('./src/md/README.md')}`,
      rf  = rme.split('##GHUSER##').join(gh_username)
               .split('##WHO##').join(fullname)
               .split('##COMPLETED##').join((Days.length - 1).toString());


if (existsSync('./README.md')) {
  unlinkSync('./README.md');
}

writeFileSync('./README.md', rf);
