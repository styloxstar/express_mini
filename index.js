const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const bodyParse = require('body-parser')

const port = 3000


app.use(bodyParse.urlencoded({extended:false})); 

app.use('/',express.static(path.resolve(__dirname+"/static")))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/static/home.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
