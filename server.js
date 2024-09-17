const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.get("*" , (req, res) => {
    
// })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home/index.html");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});