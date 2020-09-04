const imports = require("./imports.js")
const app = imports.app
function slash() {
app.get('/', (req, res) => {
  return res.render('index')
});
}


module.exports = slash;