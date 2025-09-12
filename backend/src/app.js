const express = require("express");
const app = express();


//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("This is a test!");
});

app.use("/", (req, res) => {
    res.send("Hello from the server!");
});



app.listen(3000, () => {
    console.log("Server is successfully listening to port 3000...");
});