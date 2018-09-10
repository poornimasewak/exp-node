var path = require("path");

module.exports = function(app) {

  app.get("/poornima", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newuser.html"));
  });

};
