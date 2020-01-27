var bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(250),
            field:'name'
        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email',
            allowNull: false,
            validate: { isEmail: true }
        },
        password:{
            type:DataTypes.STRING(250),
            field:'password'
        },
        passwordResetToken: {
            type: DataTypes.STRING(50),
            field: 'password_reset_token'
        },
        passwordResetExpires: {
            type: DataTypes.STRING(50),
            field: 'password_reset_expires'
        },
        emailConfirmationToken: {
            type: DataTypes.STRING(50),
            field: 'email_confirmation_token'
        },
        emailConfirmed: {
            type: DataTypes.BOOLEAN,
            field: 'email_confirmation',
            allowNull: false,
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'active',
            defaultValue: false
        }

    },
    {
        timestamps:true,
        tableName:'user'
    }
    )

    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    User.validPassword = function(password,password1) {
        return bcrypt.compareSync(password, password1);
    };

    return User
}