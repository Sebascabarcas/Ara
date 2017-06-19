'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require("../models/product")


const BillSchema = new Schema({
 client: {type: Number}
 products: [Product],
 date: { type: Date, default: Date.now},
 value: { type: Number, required: true}
})

module.exports = mongoose.model("BillSchema", BillSchema)
