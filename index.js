var fs = require("fs")
const path = require("path")

const imports = require("./imports.js")
const app = imports.app
const slash = require("./slash.js")
const cog = require("./cog.js")
const col = require("./col")
slash()
cog()
col()


/* 
app.get('/', (req, res) => {
  res.render('index.ejs')
}); */

//cannot get /?

app.listen(3000, () => {
  console.log('server started');
});

var info = path.resolve("info.txt")

fs.readFile(info, "utf-8", (err, data) => {
      if (err) {
          console.log(err)
      }
      app.get('/test', (req, res) => {
              res.send(data)
              })
      })
    



    //RES.SEND IS NOT A FUNCTION WTF???

