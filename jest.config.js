
module.exports = {

  preset                     : 'ts-jest',
  testEnvironment            : 'node',
  testMatch                  : ['**/*.spec.ts'],
  coveragePathIgnorePatterns : ['./node_modules/', "./src/ts/tests/"],
  collectCoverageFrom        : ["./src/ts/**/*.spec.{js,ts}"]

};
