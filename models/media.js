// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var media = 
{
    all: function(cb) {
        orm.all("media", function(res) {
          cb(res);
        });
    },
        
    create: function(cols, vals, cb) {
        orm.create("media", cols, vals, function(res) {
          cb(res);
        });
    },
        
    update: function(objColVals, condition, cb) {
        orm.update("media", objColVals, condition, function(res) {
          cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("media", condition, function(res) {
          cb(res);
        });
      }
};


// Export the database functions for the controller (catsController.js).
module.exports = media;