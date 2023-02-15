module.exports = (sequelize, dataTypes) => {
    const alias = "Genre"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        name: {
            type: dataTypes.STRING,
        },
        ranking: {
            type: dataTypes.INTEGER,
           
        } 
    }

    const config = {
        tableName: "genres",
        timestamp: false
    }

    const Genre = sequelize.define(alias,cols, config)
    return Genre 
}