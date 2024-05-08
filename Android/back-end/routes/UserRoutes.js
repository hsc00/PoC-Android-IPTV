const router = require("express").Router();
const User = require("../models/UserModel");

router.get('/', async (req, res) => {
    //Make sure the table name matches your actual table name

    try {
        const users = await User.findAll();
        console.log(users);
        res.json(users);
        ;
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});



module.exports = router;