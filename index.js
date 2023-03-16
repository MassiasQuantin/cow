const myInfo = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
  text: `Hi, I'm ${myInfo.name} from ${myInfo.campus}!`
}));
