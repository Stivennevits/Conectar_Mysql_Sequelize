const db = require("../database/models")
const sequelize = db.sequelize

const genresController = {
    list: /*(req, res) =>{
        db.Movie.findAll()
            .then(movies => {
                res.render("moviesList", {movies})
            })*/
        async(req,res) => {

            const genres = await db.Genre.findAll()
            res.render("genresList", {genres})
        },
    detail: async(req,res)=> {
        const genre = await db.Genre.findByPk(req.params.id)
        res.render("genresDetail", {genre})
    },
}

module.exports = genresController