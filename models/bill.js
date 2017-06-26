'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require("../models/product")


const BillSchema = new Schema({
 id: {type:Number, unique: true},
 client: {type: Number},
 products: [{}],
 cantproducts: [{}],
 changes:[{}],
 date: { type: Date, default: Date.now},
 totalvalue: { type: Number, required: true}
})

module.exports = mongoose.model("BillSchema", BillSchema)
