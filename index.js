const myInformations = require('./information.js')

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${myInformations.myself.name} from ${myInformations.myself.campus}`,
    e : "oO",
    T : "U "
}));