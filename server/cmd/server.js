exports.command = 'server [--port]'
exports.desc = 'Start a server instance'
exports.builder = {
    port: { default: 3000 },
    db: { default: 'turn' }
}
exports.handler = function (argv) {
    require('../server.js');
}
