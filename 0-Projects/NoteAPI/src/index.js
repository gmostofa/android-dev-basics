const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");



app.get("/", (req,res) =>{
    res.send("fuck you");
});

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});