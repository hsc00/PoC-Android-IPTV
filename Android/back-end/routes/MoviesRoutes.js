const router = require("express").Router();
const Movies = require("../models/MoviesModel");


router.get('/all_movies' , async (req,res) => {
    try{
        const movies = await Movies.findAll();
        console.log(movies);
        res.json(movies);
        
    }catch (error){
        console.error(err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

router.get('/:id' , async (req,res) =>{
    try{
        const id = req.params.id
        const response = await Movies.findByPk(id);
        console.log(response);
        res.json(response)
    }catch(error){
        console.error(err);
        res.status(500).json({ message: 'Error fetching a movie' });

    }
});





module.exports = router;