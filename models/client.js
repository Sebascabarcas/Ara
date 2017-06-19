'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

function has3Letters(string) {
  if (string.length >= 3) return true
  return false
}

function isCel(Number) {
  if (Number.length==10)return true
  return false
}
const ClientSchema = new Schema({
 ced: {type: Number, unique: true, required: true },
 name: { type: String, required: true, validate: has3Letters},
 cel: {type: String, required: true, validate: isCel},
 address: {type: String, required: true},
 email: {type: String, required: true},
 points: {type: Number, default:0}
})

module.exports = mongoose.model("Client", ClientSchema)
