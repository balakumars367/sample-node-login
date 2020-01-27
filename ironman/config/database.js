var config = {}
config.env = 'local';
config.dbhost = "localhost";
config.username = "root";
config.password = "";
config.db = "machine";
config.logging = true;
config.port = 3000;

let configExport = {};

configExport.dbConfig = {
    'username': 'root',
    'password': '',
    'database': 'machine',
    'host': 'localhost',
    'dialect': 'mysql',
    //logging: false,
    define: {
        timestamps: false
    }
}

module.exports = configExport