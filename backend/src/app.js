const express = require("express");
const app = express();




app.get("/getUserData", (req, res, next) => {
    try {

        throw new Error("this is an error");
        res.send("user data sent");

    }
    catch (err) {
        res.status(500).send("something went wrong contact support team!");
    }
});


app.use((err, req, res) => {

    if (err) {
        res.status(500).send("something went wrong");
    }
});

app.listen(3000, () => {
    console.log("Server is successfully listening to port 3000...");
});