const Sequelize = require('sequelize')
const { dbConfig } = require('./../config/database')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

let models = {};

models.User = sequelize.import('./user')
// models.CoAPGateway = sequelize.import('./coap')



// models.User.sync({}); 


Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})

models.sequelize = sequelize
models.Sequelize = Sequelize
module.exports = models;
