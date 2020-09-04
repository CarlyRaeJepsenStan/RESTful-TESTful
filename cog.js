const imports = require("./imports.js")
const app = imports.app 
function cog() {
app.get("/cog", (req, res) => {
  res.render("cog")
}) }
module.exports = cog
