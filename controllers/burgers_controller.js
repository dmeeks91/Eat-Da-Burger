var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
  //;
  burger.selectAll(response);
  //response.render("index", burger.selectAll());
});

router.post("/api/burgers", function(request, response) {
  burger.insertOne(request.body.burger_name, response);
});

router.put("/api/burgers/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

  var objColVals = { 
        devoured: request.body.devoured
    };

    burger.updateOne(request.params.id, response);
});

// Export routes for server.js to use.
module.exports = router;