const load = () => {
    const config = require("config-yml");
    return config.defaults; // TODO merge users --config with defaults
};

module.exports = { load };
