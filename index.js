import express from "express"
const app = express();
app.use(express.static("public"));
app.get("/" , (req,res) => {
    res.sendfile("Googel.html")
})
app.listen(8000, ()=> {
    console.log("Server started")
})
