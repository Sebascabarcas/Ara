'use strict'

const express = require("express")
const bodyParser = require("body-parser")
const hbs = require("express-handlebars")
const ara = require("./routes")

const app = express()

app.use(bodyParser.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/j)

app.engine(".hbs", hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set("view engine", ".hbs")

app.use("/ara",ara)
app.get('/home', (req,res)=>{
  res.render('home')
})
app.get('/client', (req,res)=>{
  res.render('client')
})
app.get('/products', (req,res)=>{
  res.render('product')
})
app.get('/products/new', (req,res)=>{
  res.render('productNew')
})
app.get('/products/:cod', (req,res)=>{
  res.render('productEdit')
})
app.get('/bills', (req,res)=>{
  res.render('bill')
})
app.get('/shop', (req,res)=>{
  res.render('shop')
})
module.exports = app
