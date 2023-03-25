const express = require("express");
const app = express();

const db = require("./db");

const PORT = 5001;

app.get("/", (req, res) => {
	res.json({ message: "Hello World from my first AWS instance!" });
});

app.get("/users", (req, res) => {
	const query = `SELECT * FROM users;`;

	try {
		db.pool.query(query, (err, result, fields) => {
			res.json({
				users: result,
			});
		});
	} catch (e) {
		res.json({ err: e });
	}
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
