var express = require("express");
var media = require("../models/media.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
  router.get("/", function(req, res) {
    media.all(function(data) {
      var hbsObject = {
        media: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/", function(req, res) {
    media.create([
      "media_name", "viewed", "personal_rating"
    ], [
      req.body.media_name, req.body.viewed, req.body.personal_rating
    ], function() {
      res.redirect("/");
    });
  });
  
  router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    media.update({
      viewed: req.body.viewed
    }, condition, function() {
      res.redirect("/");
    });
  });

  router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    media.delete(condition, function() {
      res.redirect("/");
    });
  });
  
// Export routes for server.js to use.
module.exports = router;