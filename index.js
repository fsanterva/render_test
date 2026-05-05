const express = require("express");
const app = express();

// serve frontend files
app.use(express.static("public"));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Snake game running on port", PORT);
});
