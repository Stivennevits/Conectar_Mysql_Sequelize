function movies(sequelize, dataTypes){

    const alias = "Movie"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        
        title: {
            type: dataTypes.STRING,
        },
        rating: {
            type: dataTypes.INTEGER,
           
        } ,
        awards: {
            type: dataTypes.INTEGER,
    
        } ,
        release_date:{
            type: dataTypes.DATE,
         
        } 
    }

    const config = {
        tableName: "movies",
        timestamp: false,
        
    }

    const movie = sequelize.define(alias,cols, config)
    return movie 
}

module.exports = movies