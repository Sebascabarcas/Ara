'use strict'

const Bill = require("../models/bill")

function getBill(req,res) {
  let billId = req.params.id
  console.log(billId)
    Bill.find({id: billId}, (err, bill) =>{
      if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

      if (!bill) res.status(404).send("No se encontró el bille")
      res.status(200).send({bill})
    })

}

function getBills(req, res) {

		Bill.find({}, (err,bill)  => {
			if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)
			if (!bill) res.status(404).send("No se encontró el bill")

			res.status(200).send({bill})
	})
}

function updateBill (req, res){
  console.log("PUT");
  console.log(req.params.id);
  console.log(req.body);
		let billId = req.params.id
	  let update = req.body

	  Bill.findOneAndUpdate({id : billId}, update, (err, billUpdated) =>{
	    if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

	   res.status(200).send({bill : billUpdated})
	  })

	}

	function deleteBill(req, res) {
    console.log(req.params.id);
		let billId = req.params.id
			Bill.findOneAndRemove({ id: billId}, (err, bill) => {
				if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

					res.status(200).send({message : "EL Billo se ha eliminado"})
				})

			}


	function saveBill(req, res) {
		console.log("POST")
	  console.log(req.params)
	  console.log(req.body)

	  let bill = new Bill()
    bill.id = req.body.id
	  bill.client = req.body.client
	  bill.products = req.body.products
		bill.cantproducts = req.body.cantproducts
    bill.changes = req.body.changes
		bill.totalvalue = req.body.totalvalue

	  bill.save((err, billStored) => {
	    if (err)  res.status(500).send(`No se ha podido guardar el dato por el sgte error ${err}`)
	//  console.log(String(err))}
	    else res.status(200).send({bill : billStored})

	    })

	}

	module.exports = {
   getBill,
	 getBills,
	 updateBill,
	 deleteBill,
	 saveBill

	}
