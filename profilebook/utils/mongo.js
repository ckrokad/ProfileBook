const MongoClient = require('mongodb').MongoClient;
const dbname = "profilebookdb";
const url = "mongodb+srv://ckrokad:ckrokd12@cluster0-nsxcx.mongodb.net/test?retryWrites=true&w=majority";

// users operations
module.exports.addUser = function(user) {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
            const users = client.db(dbname).collection("users");
            console.log("adding new user...")
            users.insertOne(user, function(err, result) {
                client.close();
                resolve(result);
            });
        });
    });
}

module.exports.getAllUsers = function(username) {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
            const users = client.db(dbname).collection("users");
            users.find({ "username": { $ne: username } }, { projection: { _id: 1, username: 1 } }).toArray(function(err, result) {
                client.close();
                resolve(result);
            });
        });
    });
}

module.exports.getUser = function(user) {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
            const users = client.db(dbname).collection("users");
            users.findOne(user, function(err, result) {
                client.close();
                resolve(result);
            });
        });
    });
}



// module.exports.addUser = function(user) {
//     return new Promise((resolve, reject) => {
//         const client = new MongoClient(url, { useNewUrlParser: true,useUnifiedTopology: true });
//         client.connect(err => {
//             const users = client.db(dbname).collection("users");
//         });
//     });
// }

// messages operations