const express = require("express");
const app = express();

app.get("/api/questions", (req, res) => {
  res.json({
    text: "Print from 1 to 10 using for-loop",
    output: "1/n2/n3/n4/n5/n6/n7/n8/n9/n10",
  });
});

app.get("/", (req, res) => {
  res.json({
    text: "welcome to k8s",
  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
