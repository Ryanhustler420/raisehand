const express = require("express");
const app = express();

app.get("/api/compilers/java", (req, res) => {
  res.json({
    compiler: "java",
    output: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
