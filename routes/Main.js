const router = require("express").Router()
const Details = require("../models/input");

// routes will be here....
router.get("/EnterDetails", async(req, res) => {
    
    res.render("EnterDetails")
})

router.post("/api/EnterDetails", async(req,res)=>{
    const { username, MoneySpent, Description } = req.body;

    try {
		const response = await Details.create({
			username, MoneySpent, Description
		})
		console.log('data created successfully: ', response)
	} catch (error) {
		{
            console.log(error)
        }
		throw error
	}

	res.json({ status: 'ok' })

})

// router.get("/completed", async(req, res) => {
//     const allTodo = await Todo.find({done: { $eq: true}});
//     res.render("completed", {todo: allTodo})
// })


module.exports = router;