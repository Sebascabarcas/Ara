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
app.get('/clients', (req,res)=>{
  res.render('client')
})
app.get('/products', (req,res)=>{
  res.render('product')
})
app.get('/products/new', (req,res)=>{
  res.render('productNew')
})
app.get('/clients/new', (req,res)=>{
  res.render('clientNew')
})
app.get('/find', (req,res)=>{
  res.render('findUser')
})
app.get('/products/:cod', (req,res)=>{
  res.render('productEdit')
})
app.get('/clients/:ced', (req,res)=>{
  res.render('clientEdit')
})
app.get('/clients/:ced/bills', (req,res)=>{
  res.render('billUser')
})
app.get('/clients/:ced/bills/:id', (req,res)=>{
  res.render('billUserBillEdit')
})
app.get('/bills', (req,res)=>{
  res.render('bill')
})
app.get('/bills/:id', (req,res)=>{
  res.render('billEdit')
})
app.get('/shop/:client', (req,res)=>{
  res.render('shop')
})
app.get('/info', (req,res)=>{
  res.render('info')
})
app.get('/info/prizes', (req,res)=>{
  res.render('clientPrizes')
})
app.get('/info/million', (req,res)=>{
  res.render('clientMillion')
})
app.get('/info/supermarket', (req,res)=>{
  res.render('infoSupermarket')
})
module.exports = app
