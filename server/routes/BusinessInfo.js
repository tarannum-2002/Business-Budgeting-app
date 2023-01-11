const router = require("express").Router()
const Userdb = require("../models/user");
const Detailsdb = require("../models/input");
const Businessdb = require("../models/business");


router.post("/api/BusinessInfo", async(req,res)=>{
    const {name, bname} = req.body;

    // const user = await Userdb.findOne({name}).lean()
    // console.log(user.name)
    // console.log(user.bname)

    console.log(name)
    console.log(bname)

    

    res.json({status : 'ok'})
    

})


module.exports= router; 
