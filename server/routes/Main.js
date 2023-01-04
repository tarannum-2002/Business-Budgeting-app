const router = require("express").Router()
const Details = require("../models/input");

// routes will be here....
router.get("/EnterDetails", async(req, res) => {
    
    res.render("EnterDetails")
})
router.get("/AllData", async(req, res) => {
    const details = await Details.find().sort('username');
    res.render('AllData', { details: details });
})


router.post("/api/EnterDetails", async(req,res)=>{
    const { username, MoneySpent, Description } = req.body;
    const user = await Details.find({ username })
    
    if (!user) {
		return res.json({ status: 'error', error: 'Person is not in the list' })
	}
    try {
		const response = await Details.create({
			username, MoneySpent, Description
		})
		res.redirect('/AllData');
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