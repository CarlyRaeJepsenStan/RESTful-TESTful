const imports = require("./imports")
	const client = imports.client
	const ObjectId = imports.ObjectId
function col() {

	client.connect(err => {
		if (err) return console.log(err)
		const mongo = client.db("demo-cluster")
		const col = mongo.collection("samples")
		col.find({"_id": ObjectId("5ef4405c150cac012dad6146")}).toArray()
			.then(docs => console.log(docs))
	})
}

module.exports = col