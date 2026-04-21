const express = require("express");
const app = express();
const port=8080;
app.use((req, res) => {
  console.log("we got a new request.");
  res.send("we got ur request, this is a response");
});

// app.get("/", (req, res) => {
//     res.send("Hello from Express!");
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});