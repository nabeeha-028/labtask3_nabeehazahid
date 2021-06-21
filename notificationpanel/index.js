
const express = require("express");
const app = express();
app.use(express.json());
const notify = [
    {
      "id": 1,
      "message": "s2 marks uploaded",
      "date" : "24/6/2021"
    
      
    },
    {
      "id": 2,
      "message": "Terminals are starting from 29th june 2021.",
      "date" : "26/6/2021"
    },
    {
      "id": 3,
      "message": "Fee challan uploaded",
      "date" : "22/6/2021"
  
    },
    {
      "id": 4,
      "message": "Terminal exams will be conducted on google classrooms.",
      "date" : "20/6/2021"
    }
    
  ];

app.get("/", function (req, res) {
  res.send("NOTIFICATION PANEL");
});
app.get("/api/about", function (req, res) {
  res.send("<h1> Most Recent: </h1>");
});

//first parameter is url
//second is a function with two inputs one is request and one is response
app.get("/api/notifications", function (req, res) {
   
  res.send(notify);
});
//get one resource
app.get("/api/notify/:index", function (req, res) {
  if (!notify[req.params.index])
    return res.status(400).send("No data found");
  res.send(notify[req.params.index]);
});
//update one resource with id e.g. index
app.put("/api/notify/cls:index", function (req, res) {
  //   console.log(req.body);
  notify[req.params.index] = req.body.name;
  res.send(notify[req.params.index]);
});
//delete one resource
app.delete("/api/notify/:index", function (req, res) {
  notify.splice(req.params.index, 1);
  res.send(notify);
});
// //create one resource
app.post("/api/notify", function (req, res) {
  notify.push(req.body.name);
  res.send(notify);

});

app.listen(3000);