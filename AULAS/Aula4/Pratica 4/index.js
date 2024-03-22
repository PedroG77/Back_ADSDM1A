const express = require("express")
const app = express();
app.use(express.json());

app.get("/", function(req, res){
    res.send('Você fez um requisição GET'); 
});
app.post("/", function(req, res){
    console.log(req.body);
    res.status(201).send("Você fez uma requisição POST")
});
app.put("/", function(req,res){
    res.json({status: "200", menssage: "Você fez uma requisição PUT"});
});
app.delete("/",function(req, res){
    res.status(204).end();
})










app.listen(3000, function(){
    console.log("API esta on")
});
 module.exports = app

