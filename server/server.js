  //import modules
  //require() is a predefined function, used to import the modules

  const express = require("express");
  //if express module imported successfully automatically getting object, that is call express object
  const mongodb = require("mongodb");
  //if mongodb module imported successfully automatically getting object, that is call mongodb object
  const cors = require("cors");
  // if cors module imported successfully automatically getting object, that is call cors object



  //create the rest object
  const app = express();
  //where app is the rest object
  //where "app" object used to develop the rest api's
  //Ex.  GET, POST, PUT, DELETE, ...  
  
  //enable cors policy
  app.use(cors());

  //set the JSON as MIME Type
   app.use(express.json());


  //create client object
  let clientObject = mongodb.MongoClient; 
  //where the "clientObject" used to connect to mongodb database 

  //create get request
  app.get("/products",(req, res)=>{   
    //mongodb+srv://admin:admin@sambait.nx70de8.mongodb.net/?retryWrites=true&w=majority
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err, connection)=>{
        if(err) throw err;
        else {
            const db = connection.db("mern_stack");
            db.collection("products").find().toArray((err, array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                 }
            })
        }
    })
  });

  app.post("/insert",(req, res)=>{
      clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err,connection)=>{
        if(err) throw err;
          else{
            const db = connection.db("mern_stack");
             db.collection("products").insertOne({"p_id":req.body.p_id, "p_name":req.body.p_name, "p_cost":req.body.p_cost},(err,result)=>{
              if(err) throw err;
              else{
                res.send({"insert":"success"});
              }
            })
          }
      })
  });

  //put request 
  app.put("/update",(req,res)=>{
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err, connection)=>{
      if(err) throw err;
      else{
        const db = connection.db('mern_stack');
        db.collection("products").updateOne({"p_id":req.body.p_id},{$set:{"p_name":req.body.p_name, "p_cost":req.body.p_cost}},(err,result)=>{
          if(err) throw err;
          else{
            res.send({"update":"success"});
          }
        })
      }
    })
  });

  //delete request
  app.delete("/delete",(req,res)=>{
    clientObject.connect('mongodb+srv://admin:admin@sambait.s9lniuw.mongodb.net/?retryWrites=true&w=majority&appName=SambaIT',(err,connection)=>{
      if(err) throw err;
      else{
        const db = connection.db("mern_stack");
        db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
          if(err) throw err;
          else{
            res.send({"delete":"success"});
          }
        })
      }
    })
  });

  //assign the port no.
  app.listen(5000,()=>{
    console.log("Server Listening the Port No. 5000");
  });

   
  

