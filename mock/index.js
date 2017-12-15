const userlist = require('./list.js').list;
const name = require('./name.js').list;
const team = require('./team.js').list;
const random = require('./random.js').list;

module.exports = () => ({
  userlist,
  name,
  team,
  random,
});
