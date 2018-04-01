const { MongoClient } = require("mongodb");
const debug = require("debug")("turn:db");
const config = require("config-yml");

function connect() {
    return MongoClient.connect()
}

module.exports = {
    connect
};
