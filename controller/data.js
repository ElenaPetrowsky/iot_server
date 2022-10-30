// import { PrismaClient } from "@prisma/client";
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();


const getLast100Data = async (req, res) =>{
    prisma.Data.findMany({
        take:4
    }).then(data=>{
        res.status(200)
           .send(data)
    })
}

const insertData = async (req, res) => {
    let data  = req.body

    prisma.Data.create({
        data:data
    }).then(data=>{
        res.status(201).send({
            message:`Request sent at ${new Date(Date.now()).toISOString()}`
        })
    })
}

exports.insertData = insertData
exports.getLast100Data = getLast100Data