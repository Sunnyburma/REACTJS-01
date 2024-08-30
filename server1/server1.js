//import the modules
//require() function, used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const jwt = require("jwt-simple");


//create rest services object
//rest services object, used to create the rest services
const app = express();
//where "app" is the rest services object
//where "app" object used to create GET,POST,PUT,DELETE,HEAD,.....


//MIME Type
app.use(express.json());


//enable cors policy
app.use(cors());


//create client object
//client object, used to connect to mongodb database
const eyegear = mongodb.MongoClient;
//where "eyegear" is the client
//by using eyegear we can connect to mongodb database


//variable to store the token
var server_token = "";

//create post request
app.post("/login",(req,res)=>{
    eyegear.connect("mongodb+srv://benfranlin:benfranlin@benfranklin.ftdm7ju.mongodb.net/?retryWrites=true&w=majority",
                                            (err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("reactjs_training");
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        //token
                        //converting readable data to unreadable data with password called as token
                        let token = jwt.encode({"uname":req.body.uname,"upwd":req.body.upwd},"hr@benfranklin");
                        server_token = token; 
                        res.json({"login":"success","token" : token});
                    }else{
                        res.json({"login":"fail"});
                    }
                }
            })
        }
    })
});

//middleware
const auth = (req,res,next)=>{
    const all_headers = req.headers;
    if(all_headers.token == server_token){
        next();
    }else{
        res.json({"message":"auth failed"});
    }
}

app.get("/vuejs",(req,res)=>{
    eyegear.connect("mongodb+srv://benfranlin:benfranlin@benfranklin.ftdm7ju.mongodb.net/?retryWrites=true&w=majority",
                                            (err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("reactjs_training");
            db.collection("home").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    })
});


app.get("/reactjs",(req,res)=>{
    eyegear.connect("mongodb+srv://benfranlin:benfranlin@benfranklin.ftdm7ju.mongodb.net/?retryWrites=true&w=majority",
                                            (err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("reactjs_training");
            db.collection("about").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    })
});


app.get("/angular",(req,res)=>{
    eyegear.connect("mongodb+srv://benfranlin:benfranlin@benfranklin.ftdm7ju.mongodb.net/?retryWrites=true&w=majority",
                                            (err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("reactjs_training");
            db.collection("portfolio").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    })
});



//assign the port
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});