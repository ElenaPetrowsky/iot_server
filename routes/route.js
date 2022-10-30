// import express from "express";
// import { getLast100Data, insertData } from "../controller/data.js"
const  express = require("express")
const { getLast100Data, insertData } = require("../controller/data.js")
const router = express.Router();

router.get('/', getLast100Data);

router.post('/', insertData)

module.exports = router;