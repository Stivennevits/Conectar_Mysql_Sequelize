const db = require("../database/models")
const sequelize = db.sequelize

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
        const movies = await db.Movie.findAll({
            order: [
                ["release_date", "DESC"]
            ],
            limit: 5
        })
        res.render("newestMovies", {movies})
    },
    recomended : async(req,res) => {
        const movies = await db.Movie.findAll({
            where:{
                rating: {[db.Sequelize.Op.gt]: 8}
            },
            order: [
                ["rating", "DESC"]
            ]
        })
        res.render("recommendedMovies", {movies})
    }       
}


module.exports = moviesController