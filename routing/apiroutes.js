var usertable = [];

module.exports = function(app) {

  app.get("/api/userlist", function(req, res) {
    res.json(usertable);
  });

  app.post("/data/addnewuser", function(req, res) {
    // console.log(req);
      usertable.push(req.body);
      
      var updateduser = {
          name: "Hello, "+req.body.name,
          occupation: req.body.occupation
      }
    res.json(updateduser);
  });

};
