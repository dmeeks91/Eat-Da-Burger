// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(res) {
        orm.querySQL("SELECT * FROM burgers").then(function(data){
            res.render("index", {burgers: data});
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerName, res) {
        orm.querySQL(`INSERT INTO burgers (burger_name) VALUES ("${burgerName}")`)
        .then(function(data){
            res.json({ id: data.insertId });
        });
    },
    updateOne: function(burgerID, res) {
        orm.querySQL(`UPDATE burgers set ? WHERE ?`, [{devoured:true},{id:burgerID}])
        .then(function(data){
            console.log(data);
            if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
        /* orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        }); */
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;