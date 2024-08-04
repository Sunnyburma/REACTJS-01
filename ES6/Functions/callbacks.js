/*
function func_one(param1){
      param1();
};
func_one(function func_two(){
    console.log("I am from callback");
});
*/

/*
function func_one(param1,param2,param3){
    let res1 =param1();
    let res2 =param2();
    let res3 =param3();
    console.log(res1,res2,res3);                   //ReactJs NodeJs MongoDB
}
func_one(function f1(){
    return "ReactJs";
},function f2(){
    return "NodeJs";
} ,function f3(){
    return "MongoDB";
});

let add = (num,callback)=>{
    return callback(num+5,false);
}
add(5,(addsum,error)=>{
    if(!error){
        console.log(addsum);
    }
});


//subtraction 
let add1 = (num,callback)=>{
    return callback(num-3,false);
}
add1(5,(sub,error)=>{
    if(!error){
        console.log(sub);
    }
});



add = (num, callback)=>{
    return callback(num+5,false);
}
sub = (sum,callback)=>{
    return callback(sum-2,false)
}
mul=(subt,callback)=>{
    return callback(subt*2,false);
}
div = (multi,callback)=>{
    return callback(multi/4+5,false);
}
add(5,(sum,error)=>{
    if(!error){
    console.log(sum);
    sub(sum,(subt,error)=>{
        if(!error){
            console.log(subt)
            mul(subt,(multi,error)=>{
                if(!error){
                    console.log(multi);
                    div(multi,(divn,error)=>{
                        if(!error){
                            console.log(divn);
                        }
                    })
                }
               
            })
        }
       
    })
}
    
});

*/


let string1 = (para,callback)=>{
    return callback(para+" Shyam",false);
}
let string2 = (para1,callback)=>{
    return callback(para1+" Krishna",false);
}
let string3 = (para2,callback)=>{
    return callback(para2+" Bishnu",false);
}
let string4 = (para3,callback)=>{
    return callback(para3+ " Narshima",false)
}
let string5 = (para4,callback)=>{
    return callback(para4+" Pashuram",false);
}

string1("Ram",(strres,error)=>{
    if(!error){
        console.log(strres);
        string2(strres,(strres2,error)=>{
            if(!error){
                console.log(strres2);

                string3(strres2,(strres3,error)=>{
                    if(!error){
                    console.log(strres3);
                    string4(strres3,(strres4,error)=>{
                        if(!error){
                            console.log(strres4);
                            string5(strres4,(strres5,error)=>{
                                if(!error){
                                    console.log(strres5);
                                }
                            });
                        }
                    });
                    }
                })
            }
        });
        
    }
});
 
//tightly cuplied code, this type of code is called CallBack Hell--------------- not recomended
//use promises


 

















