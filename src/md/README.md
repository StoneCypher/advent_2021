<!--

  W   W
  W   W  AA  ARR  N  N III N  N  GG
  W   W A  A A  R NN N  I  NN N G
  W W W AAAA RRR  N NN  I  N NN G  G
   W W  A  A R  R N  N III N  N  GGG

  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  DO NOT EDIT THIS FILE.

  This is a build product.  Edit `src/md/README.md` instead.
  This file will be replaced every build.

-->
# ##WHO##'s advent_2021 dashboard

John's Advent of code 2021 setup

[Puzzles are here](https://adventofcode.com/2021)

[Your solutions are here](https://##GHUSER##.github.io/advent_2021/solutions.html) (link works after getting started is complete)

You have completed ##COMPLETED## of 25 puzzles.





<br/><br/>

# getting started

One time instructions:

1. Fork the repo
1. Turn `github pages` on on your fork, for `main` branch, `/docs` directory
1. Download your fork
1. Go into `%/src/ts/config.ts` and set your things
1. Run a build `npm run build`
1. Reload this file
1. Go to [Github Pages](https://github.com/##GHUSER##/advent_2021/settings/pages).
    * Turn on pages for `main` branch, `/docs` directory
1. Commit and push the results

Should be ready.





<br/><br/>

# to run

`npm run build`





<br/><br/>

# to run just one day

`npm run day 6`





<br/><br/>

# to add a day

1. copy five files from day 0 to the new day number
    * `%/src/ts/day0.ts`
    * `%/src/ts/day0.spec.ts`
    * `%/src/ts/data/0_example.txt`
    * `%/src/ts/data/0_example_solution.txt`
    * `%/src/ts/data/0_problem.txt`
1. modify `%/src/ts/days.ts` to add the new day to the list
1. replace the contents of the `data` files as appropriate
1. do your work in `dayN.ts`
1. do any day-specific tests in `dayN.spec.ts`
1. run a build
