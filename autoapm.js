#!/usr/bin/env node

var execSync = require('child_process').execSync;

var chalk = require('chalk');
var program = require('commander');
var os = require('os');
var path = require('path');

program.option('-p, --packages', 'the packages file. Needs to be a .json file')
       .parse(process.argv);

var packagesFile = program.packages ||
                   path.join(os.homedir(), '.auto-apm.packages.json');

if (!packagesFile.endsWith(".json"))
    throw "packages file must end with .json";

var packages = require(packagesFile);

var stdout = execSync('apm ls -j', {encoding: 'utf8'});
var installed = JSON.parse(stdout);
installed = installed.user.map(function (p) { return p.name; });
console.log("User installed packages:");
console.log(installed.join(", "));

packages.forEach(function (pkg) {
    if (installed.indexOf(pkg) >= 0) {
        console.log(chalk.grey(pkg + " already installed"));
    } else {
        console.log(chalk.green('installing ' + pkg));
        var result = execSync('apm install ' + pkg, {encoding: 'utf8'});
        console.log(result);
    }
});
