'use strict'

const Client = require("../models/client")

function getClient(req,res) {
  let clientCed = req.params.clientCed
  console.log(clientCed)
    Client.find({ced: clientCed}, (err, client) =>{
      if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

      if (!client) res.status(404).send("No se encontró el cliente")
      res.status(200).send({client})
    })

}

function getClients(req, res) {
   console.log("GET");
   console.log(req.body);
		Client.find({}, (err,client)  => {
			if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)
			if (!client) res.status(404).send("No se encontró el client")

			res.status(200).send({client})
	})
}

function updateClient (req, res){
		let clientCed = req.params.clientCed
	  let update = req.body

	  Client.findOneAndUpdate({ ced: clientCed}, update, (err, clientUpdated) =>{
	    if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)

	   res.status(200).send({client : clientUpdated})
	  })

	}

	function deleteClient(req, res) {
		let clientCed = req.params.clientCed
			Client.findOneAndRemove({ced: clientCed}, (err, client) => {
				if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)
        console.log('hola')
        console.log({client})
        res.status(200).send({message : "El Cliente se ha eliminado"})
			/*	client.remove(err =>{
					if (err) res.status(500).send(`La petición no pudo ejecutarse: ${err}`)
					res.status(200).send({message : "El Cliente se ha eliminado"})
				})
            */
			})
	}

  function buy(req, res) {

  }

	function saveClient(req, res) {
		console.log("POST")
	  console.log(req.body)

	  let client = new Client()
	  client.ced = req.body.ced
	  client.name = req.body.name
		client.cel = req.body.cel
    client.address = req.body.address
    client.email = req.body.email
    client.points = 0


	  client.save((err, clientStored) => {
	    if (err)  res.status(500).send(`No se ha podido guardar el dato por el sgte error ${err}`)
	//  console.log(String(err))}
	    else res.status(200).send({client : clientStored})

	    })
	}

	module.exports = {
   getClient,
	 getClients,
	 updateClient,
	 deleteClient,
	 saveClient

	}
