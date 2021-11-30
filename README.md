# advent_2021
advent of code 2021 setup

[reports are here](https://stonecypher.github.io/advent_2021/) (change this subdomain to your username; you won't be able to see mine)

you need to turn on github pages, set the branch to `main`, set the directory to `docs/`, then wait about four minutes before reports will work.  afterwards, reports will be updated 1-2 minutes after each push.





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
