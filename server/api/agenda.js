const Agenda = require("agenda");
const { MongoClient } = require("mongodb");

async function start() {
    const agenda = new Agenda();
    agenda.database(
    const agenda = new Agenda({ db: { address: mongoConnectionString } });

    await new Promise(resolve => agenda.once("ready", resolve));

    agenda.start();
}

module.exports = { start };
