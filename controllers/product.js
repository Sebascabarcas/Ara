'use strict'

const Product = require("../models/product")

function getProduct(req,res) {
  let productCod = req.params.cod
  console.log(productCod)
    Product.find({cod: productCod}, (err, product) =>{
      if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

      if (!product) res.status(404).send("No se encontró el producte")
      res.status(200).send({product})
    })

}

function getProducts(req, res) {

		Product.find({}, (err,product)  => {
			if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)
			if (!product) res.status(404).send("No se encontró el product")

			res.status(200).send({product})
	})
}

function updateProduct (req, res){
  console.log("PUT");
  console.log(req.params.cod);
  console.log(req.body);
		let productCod = req.params.cod
	  let update = req.body

	  Product.findOneAndUpdate({cod : productCod}, update, (err, productUpdated) =>{
	    if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

	   res.status(200).send({product : productUpdated})
	  })

	}

	function deleteProduct(req, res) {
    console.log(req.params.cod);
		let productCod = req.params.cod
			Product.findOneAndRemove({ cod: productCod}, (err, product) => {
				if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

					res.status(200).send({message : "EL Producto se ha eliminado"})
				})

			}


	function saveProduct(req, res) {
		console.log("POST")
	  console.log(req.params)
	  console.log(req.body)

	  let product = new Product()
	  product.cod = req.body.cod
	  product.name = req.body.name
		product.price = req.body.price

	  product.save((err, productStored) => {
	    if (err)  res.status(500).send(`No se ha podido guardar el dato por el sgte error ${err}`)
	//  console.log(String(err))}
	    else res.status(200).send({product : productStored})

	    })

	}

	module.exports = {
   getProduct,
	 getProducts,
	 updateProduct,
	 deleteProduct,
	 saveProduct

	}
