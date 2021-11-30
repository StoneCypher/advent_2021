
const fs = require('fs');

const package = JSON.parse(fs.readFileSync('package.json'));

fs.writeFileSync('./src/ts/generated_code/version.ts', `

//  WARNING! DO NOT EDIT!
//  ---------------------
//
//  This file is a build product.  If you edit it, your changes
//  will be mechanically discarded.
//
//  Want to alter this?  Look at %/src/build_js/write_version.js



const version : string = "${package.version}",
      built   : number = ${new Date().getTime()};

export { version, built };

`);
