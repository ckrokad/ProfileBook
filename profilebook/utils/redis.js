var redis = require('redis');


module.exports = function() {
    return new Promise((resolve, reject) => {
        let connector = redis.createClient();

        connector.on("error", () => {
            reject("Redis Connection failed");
        });

        connector.on("connect", () => {
            resolve(connector);
        });
    });
};