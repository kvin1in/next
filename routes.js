const routes = require("next-routes");

module.exports = routes()
  .add("leader", "/about/leader/:id")
  .add("leaders", "/about/leaders");
