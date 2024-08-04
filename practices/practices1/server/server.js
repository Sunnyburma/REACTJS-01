const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

let clientObject = mongodb.MongoClient;

app.get("/products",(req,res)=>{
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("mern_stack");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array); 
                }
                
            })
        }

    })
});

app.post("/insert",(req,res)=>{
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err, connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("mern_stack");
            db.collection("products").insertOne({"p_id":req.body.p_id, "p_name":req.body.p_name, "p_cost":req.body.p_cost},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"insert":"success"})
                }
            })
        }
    })
});

app.put("/update",(req,res)=>{
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT', (err,connection)=>{
        if(err) throw err;
        else{
            const db =connection.db("mern_stack");
            db.collection("products").updateOne({"p_id":req.body.p_id}, {$set:{"p_name":req.body.p_name,"p_cost":req.body.p_cost}},(err, result)=>{
                res.send({"update":"success"})
            })
        }
    })
});

app.delete("/delete",(req,res)=>{
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("mern_stack");
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                res.send({"delete":"success"})
            })
        }
    })
})

app.listen(8000,()=>{
    console.log("server listen port no 8000 ")
}); 