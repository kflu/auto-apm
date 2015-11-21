#!/usr/bin/env node

var execSync = require('child_process').execSync;
var chalk = require('chalk');
var program = require('commander');
var os = require('os');
var path = require('path');
var debuglog = require('util').debuglog('autoapm');

program.option('-p, --packages [packages_file.json]', 'a .json file containing a list of packages to install. ')
       .parse(process.argv);

var packagesFile = path.resolve(program.packages) ||
                   path.join(os.homedir(), '.auto-apm.packages.json');
debuglog("packagesFile" + packagesFile);

if (!packagesFile.endsWith(".json"))
    throw "packages file must end with .json";

var packages = require(packagesFile);

var stdout = execSync('apm ls -j', {encoding: 'utf8'});
var installed = JSON.parse(stdout);
installed = installed.user.map(function (p) { return p.name; });
console.log("User installed packages:" + installed.join(", "));

packages.forEach(function (pkg) {
    if (installed.indexOf(pkg) >= 0) {
        console.log(chalk.grey(pkg + " already installed"));
    } else {
        process.stdout.write(chalk.green('installing ' + pkg + '...'));
        var error;
        try {
            execSync('apm install ' + pkg);
        }
        catch (e) {
            console.log('');
            console.log(chalk.red(e));
            error = e;
        }
        finally{
            if (!error) console.log(chalk.green("done!"));
        }
    }
});
