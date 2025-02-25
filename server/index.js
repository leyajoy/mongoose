const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/crud");
const UserSchema = mongoose.Schema({
	username: String,
	age: Number,
	country: String,
	password: String,
	email: String,
});
const UserModel = mongoose.model("users", UserSchema);
app.get("/getUsers", (req, res) => {
	UserModel.find({})
		.then(function (users) {
			res.json(users);
		})
		.catch(function (err) {
			console.log(err);
		});
});
app.listen(3001, () => {
	console.log("server is running");
});
