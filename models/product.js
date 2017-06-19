'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new Schema({
 cod: {type: Number, unique: true, required: true },
 name: { type: String, required: true},
 price: { type: Number, required: true}
})

module.exports = mongoose.model("Product", ProductSchema)
