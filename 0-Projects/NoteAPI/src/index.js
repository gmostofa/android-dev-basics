const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);


app.get("/", (req,res) =>{
    res.send("fuck you");
});


mongoose.connect("mongodb+srv://admin:admin@cluster0.vb3islp.mongodb.net/")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server started on port 5000"); 
    });
}).catch((error) =>{
    console.Console.log(error);
})