const path = require("path")
const express = require("express")
const app = express()
const publicPath =path.join(__dirname, "..", "public")
const port = process.env.PORT || 3000

app.use(express.static(publicpath))

app.get('*', (req,res) =>{
    res.sendfile(path.join(publicPath), "index.html")
})
app.listen(port, function(){
    console.log(`server is running on port${port}`)
})