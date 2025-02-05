const cl=require('cli-color');
const uc=require('upper-case');

const message="Trying cool npm pkgs"

console.log(cl.green(message));
console.log(uc.upperCase(message));