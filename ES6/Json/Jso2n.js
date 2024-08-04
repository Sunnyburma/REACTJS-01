/*
//JSON
//JSON stands for javascript object notation 
//JSON used to transfer the data over the network
//JSON is ligth weigth
//JSON is also called javascript object
//objects --- {}
//Arrays -----[]
//Data    --- key & value pairs
//key & value separated by using  ":"
//key & value pairs separated by using ","

let obj1 = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};                                            
//dot operator
console.log(obj1.key1,obj1.key2, obj1.key3);  //Hello_1 Hello_2 Hello_3

let obj = {
    key1 : "ReactJs",
    key2 : "NodeJs",
    key3 : "MongoDb"
} 
//dot operator
console.log(obj.key1,obj.key2,obj.key3);     //ReactJs NodeJs MongoDb

//[]operator
console.log(obj["key1"],obj["key2"],obj["key3"]);   //ReactJs NodeJs MongoDb

//for...in loop
for(let key in obj){
    console.log(obj[key]);                     //ReactJs
}                                              //NodeJs
                                               //MongoDb

//Destructuring
//ES6
//Destructuring is powerfull and easy
let {key1,key2,key3} = obj;
console.log(key1,key2,key3);                    ////ReactJs NodeJs MongoDb


let obj = {
    "key1" : "Hello_1",
    100 : "Hello_2",
    true : "Hello_3",
    undefined :"Hello_4",
    null : "Hello_5"
};
// "." operator is suitable for the string data type.
 
//"[]" operator is suitable for all or every data type.
//powerfull operator is [] operator.

console.log(obj["key1"],obj[100],obj[true],obj[undefined], obj[null]);
//Hello_1 Hello_2 Hello_3 Hello_4 Hello_5. 


let obj1 = {
    "key1" : "Hello_1", 
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};
let obj2 =  {
    ...obj1,
    "key4" : "Hello_4",
    "key5" : "Hello_5" 
}
let obj3 ={
    ...obj2,
    "key6" : "Hello_6",
    "key7" : "Hello_7"
}
console.log(obj1);
console.log(obj2);
console.log(obj3);


let obj1 = {
     "key1" : "hello_1"
};
let obj2 = {
    "key2" : "hello_2"
}
let obj3 = {
    "key3" : "hello"
}
let obj4 = {...obj1,...obj2,...obj3}
console.log(obj4); //{ key1: 'hello_1', key2: 'hello_2', key3: 'hello' }


//the object in array
let obj = [
    {p_id : "p101", p_name : "p_one", p_cost : "10000"},
    {p_id : "p202", p_name : "p_two", p_cost : "20000"},
    {p_id : "p303", p_name : "p_three", p_cost : "30000"},
    {p_id : "p404", p_name : "p_four", p_cost : "40000"},
    {p_id : "p505", p_name : "p_five", p_cost : "50000"},
]; 
//foreach
obj.forEach(element => {
    console.log(element.p_id, element.p_name, element.p_cost);//p101 p_one 10000
                                                            // p202 p_two 20000
                                                            // p303 p_three 30000
                                                            // p404 p_four 40000
                                                            //  p505 p_five 50000
});
*/

/*

let obj = [
    {p_id : "p101", p_name : "p_one", p_cost : 100000},   
    {p_id : "p202", p_name : "p_two", p_cost : 200000},  
    {p_id : "p303", p_name : "p_three", p_cost : 300000},   
    {p_id : "p404", p_name : "p_four", p_cost : 400000}, 
    {p_id : "p505", p_name : "p_five", p_cost : 500000}    
];

console.log(
    obj.filter(element=>element.p_cost >= 400000).map(element=>{return {"p_id":
     element.p_id, "p_name" : element.p_name, "p_cost" : element.p_cost}
        })
);
*/


let obj1 = {
    obj1 : {
        obj1 : {
            "key1" : "Hello"
        }
    }
};
let {obj1:G1} = obj1;
let {obj1:G2} = G1;
let {key1} = G2;
console.log(key1);                 //Hello


let obj ={
    key1 : "hello1", 
    key1 : "hello2"
}
console.log(obj);









































