const Agenda = require("agenda");
const { MongoClient } = require("mongodb");

async function start() {
    const agenda = new Agenda();

    await new Promise(resolve => agenda.once("ready", resolve));

    agenda.start();
}

module.exports = { start };
