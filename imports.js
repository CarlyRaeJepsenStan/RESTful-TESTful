const express = require('express');
var app = express()
const ejs = require("ejs")
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
var a = "test"
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var ObjectId = require('mongodb').ObjectId;

module.exports = {app,a, client, ObjectId}
