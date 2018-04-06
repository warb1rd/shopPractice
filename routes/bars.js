const express = require("express")
const barsRouter = new express.Router()
const Bar = require("../models/Bar.js")
const { verifyToken } = require("../serverAuth.js")

barsRouter.get("/", (req, res) => {
    Bar.find({}).populate("user").exec((err, allBars) => {                          //Finds all the bars, Populates the user fields and attaches it to the bar that the user created
        res.json(allBars)
    })
})
barsRouter.use(verifyToken)                                                         //Any requests after this method, will be protected routes

barsRouter.post("/", (req, res) => {
    Bar.create({...req.body, user: req.user}, (err, newBar) => {                    //new bar will be created that includes all fields from form and a USER KEY which is the current user
        res.json({success: true, message: "new bar opened ", bar: newBar})                                                            //spread the body of the request in a new object that also includes the user
    })
})

module.exports = barsRouter