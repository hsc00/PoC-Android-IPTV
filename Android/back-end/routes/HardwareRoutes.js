const router = require("express").Router();
const Hardware = require("../models/HardwareModel");


router.post('/login', async (req, res) => {
    try {

      
        const  {mac}  = req.body;

        const address = await Hardware.findOne({
            where: {
                mac: mac,
            },
        });

        if (address === null) {
            console.log('Address:', address);

            res.status(404).json({ status: "not_found", message: "Utilizador não encontrado." });
            return
        } else {
            res.status(200).json({ status: "success", message: "Utilizador encontrado." });
        }
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ error: error.message }); // Send error details in the response
    }
});

module.exports = router;