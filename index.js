'use strict'

const mongoose = require("mongoose")
const app = require("./app")
const config = require("./Config/config")
mongoose.connect( config.db, (err, res) =>{
  if (err) {
    console.log(String(err))
  }
  console.log("Conectado a mongodb")
  app.listen(config.port, (req, res) => {
    console.log("Conectado correctamente")
  } )
})
