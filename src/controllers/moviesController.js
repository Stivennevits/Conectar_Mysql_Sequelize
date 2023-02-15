const db = require("../database/models")

const moviesController = {
    list: /*(req, res) =>{
        db.Movie.findAll()
            .then(movies => {
                res.render("moviesList", {movies})
            })*/
            async(req,res) => {

                const movies = await db.Movie.findAll()
                res.render("moviesList", {movies})
            },
    detail: async(req,res)=> {
        const movie = await db.Movie.findByPk(req.params.id)
        res.render("moviesDetail", {movie})
    },
    new: async(req,res) => {
        const movies = await db.Movie.findAll()
    }      
}


module.exports = moviesController