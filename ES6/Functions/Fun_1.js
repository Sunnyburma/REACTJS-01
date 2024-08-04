//Function
//bussiness login is called function
//reuse bussiness logic
//1) named function 
//2) aronymous function 
//3) arrow function 
//4) 

//The function with "user defined name" is called as named function.
/*
syntax 
1)function definition 

2)function calling
*/

// 

// function fun_one(){
//     console.log("welcome");
// }
// fun_one(); 

/*
function func_one(param1,param2,param3){
        console.log(param1,param2,param3);
}
func_one("Hello1","Hello2","Hello3");
func_one();
func_one(1,2,3);
func_one(100,200,300);
func_one(100,200,300,400);
func_one(undefined,"Hello_2");
*/

/*
function fun_one(...param1){               //spread operator(...)
       console.log(param1);                                    //the default value is empty array

}
fun_one(100,200,300,400,500,600)
fun_one();                                //empty array []
fun_one("Hello1");                        //in zeroth position 
fun_one(undefined,undefined);             //undefined in zeroth position 
                                          //other undefined in first position 

*/                                          
/*                                          
function func_one(...param1,...param2){     //spread operator is always startin last  in occurance
                                          //we can pass one spread  operator
}
*/

/*
function func_one(param1,...param2){
    console.log(param1,param2);
}
func_one();                         //undefined []
func_one(100,200);                     //100 [ 200 ] 
func_one(100,200,300);                       //100 [ 200, 300 ]

//default parameters in functions
//ES6
function func_one(param1="hello1",param2="hello2", param3="hello3"){
    console.log(param1,param2,param3);

}
func_one();                              //hello1 hello2 hello3
func_one("welcome1");                    //welcome1 hello2 hello3
func_one(undefined,undefined,undefined); //hello1 hello2 hello3  no effect on orginal value
func_one(null,null,null);                 //delete the orginal value
*/

/*
function func_one(param1,param2="Hello2",...param3){
    console.log(param1,param2,param3);                  //undefined Hello2 []
}
func_one();
func_one("Hello_1");                                   //Hello_1 Hello2 []
func_one("Hello_1",undefined, "Hello_3");              //Hello_1 Hello2 [ 'Hello_3' ]

func_one(100,undefined,200,300,400,500)                //100 Hello2 [ 200, 300, 400, 500 ]
func_one(null,null,null);                              //null null [ null ]
*/
 
/*
//The function without name called Anonymous function 
let func_one = function(){
    console.log("welcome to anonymous function"); //welcome to anonymous function
}
func_one();
*/

/*
let func_one = function(param1,param2,param3){
    console.log(param1,param2,param3);
}
func_one();                                        //undefined undefined undefined
func_one("Hello_1","Hello_2","Hello_3");           //Hello_1 Hello_2 Hello_3
func_one(100,200,300);                            //100 200 300
*/

/*
let func_one =function(param1,param2="Hello_2",...param3){
    console.log(param1,param2,param3);
};
func_one();                                         //undefined Hello_2 []
func_one("Hello_1",undefined,"Hello_3");             //Hello_1 Hello_2 [ 'Hello_3' ]
func_one(undefined,undefined,undefined)              //undefined Hello_2 [ undefined ]
func_one(null,null,null);                            //null null [ null ]
*/

/*
let func_one = function(){
    return "Welcome to anonymous function";
};
let res = func_one();
console.log(res);                                      //Welcome to anonymous function
*/

/*
// typeof
console.log(typeof "Hello");              //string
console.log(typeof 100);                 //number
console.log(typeof true);                //boolean
console.log(typeof undefined);           //undefined
console.log(typeof null);                //object
console.log(typeof []);                  //object  
console.log(typeof {});                  //object
console.log(typeof function(){});        //function
*/



//JSON
//used to transfer the data over the network
//json is light weight
//object----{}
//array-----[]
//data------key & value pairs
/*
let obj ={
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
}
console.log(obj.key1,obj.key2,obj.key3);            //Hello_1 Hello_2 Hello_3
*/

/*
let obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : function(){
        return "Hello_3";
    }
};
let res = obj.key3();
console.log(res);                    //Hello_3
*/

/*
let obj ={
    key1 : "",
    key2 : "",
    key3 : function(){                  
        let inner  = function(){
            this.key1 = "Hello_1";     //in anonymous function "this" is represent the "function" 
            this.key2 = "Hello_2";
        }
        inner();                         // in javascript there is bug
    }

};
obj.key3();
console.log(obj.key1, obj.key2);
*/

/*
let obj = {
    key1 : "",
    key2 : "",
    key3 : function(){
        let inner=()=>{
            this.key1 = "Hello_1";
            this.key2 = "Hello_2";
        }
        inner();
    }
};
 obj.key3();
 console.log(obj.key1, obj.key2);    //Hello_1 Hello_2
*/

/*
let func_one = ()=>{
    return "Hello_62";
};
let res =func_one();
console.log(res);
*/
/*
let func_one = ()=>"hello";
let res = func_one();
console.log(res);
*/

/*
let networkCall = (successsCallBack, errorCallBack)=>{
    let res1 = successsCallBack();
    let res2 = errorCallBack();
    console.log(res1,res2);         //Success
                                    //Error

};
networkCall(()=>{
    return "Success";
},()=>{
    return "Error";
});  
*/

//array
//collection of indexed elements called as array.
/*
let arr1 = [10,20,30,40,50,60];
console.log(arr1);
console.log(arr1.length);

let arr2 = [100,200,300,400,500];
console.log(arr2.length);
delete arr2[0];
console.log(arr2); 
console.log(arr2.length);      //reference is not deleting 
 */


/*
//Map function two man uclute the each and every elements
 let arr3 = [1,2,3,4,5]
 let newArr3 = arr3.map((element, index)=>{
    return element*100;
 });
 console.log(newArr3);            //[ 100, 200, 300, 400, 500 ] 


 let arr4 = [100,200,300,400,500,600];
let newArr4 = arr4.filter(element=>element>=300);
console.log(newArr4);                    //[ 300, 400, 500, 600 ]

let arr5 = [1,2,3,4,5];
let newArr5 = arr5.map(element=>element*100).filter(element=>element<=300);
console.log(newArr5)                          //[ 100, 200, 300 ]

let arr6 = [1,2,3,4,5];
let arr6Add = arr6.reduce((x,y)=>{
    return x+y;
});                                        //15

console.log(arr6Add);

let arr7 = [1,2,3,4,5]; 
let accRes = arr7.map(element=>element*100).filter(element=>element<=300).reduce((e1,e2)=>{
    return e1+e2;
},400);
console.log(accRes);

let arr8 = [10,20,30,40,50,60,70,80,90,100];
arr8.splice(4,3);                           //4 means index and 3 means no of elements
console.log(arr8);                         //[ 10, 20,  30, 40, 80, 90, 100 ]
arr8.splice(1,2);                           //"1" means index and "2" means no of elements
console.log(arr8);                          //[ 10, 40, 80, 90, 100 ]
arr8.splice(1,0,20,30);
console.log(arr8);                          //[ 10,20, 30, 40, 80, 90, 100 ]
arr8.splice(4,1,50,60,70,80);
console.log(arr8);                          //[ 10,20, 30, 40,50,60,70 80, 90, 100 ]


let arr9 = [20,30,40];
arr9.push(50);
console.log(arr9);                           //[ 20, 30, 40, 50 ]
arr9.unshift(10);
console.log(arr9);                           //[ 10, 20, 30, 40, 50 ]
arr9.pop();
console.log(arr9);                            //[10, 20, 30, 40 ]
arr9.shift();
console.log(arr9);                          //[ 20, 30, 40 ]


let arr10 = [10,20,30,40,50];
let xeroxArr = [...arr10];  
arr10.push(60);
xeroxArr.push(70);
console.log(arr10);                       //[ 10, 20, 30, 40, 50, 60 ]
console.log(xeroxArr);                    //[ 10, 20, 30, 40, 50, 70 ]

let arr11 = [10,20,30,40,50,60];
let arr12 = [...arr11,70];
let arr13 = [5,...arr11];
let arr13_1 = [...arr11,80]
console.log(arr11);                      //[10,20,30,40,50,60]
console.log(arr12);                      //[10,20,30,40,50,60,70]
console.log(arr13);                      //[5,10,20,30,40,50,60]
console.log(arr13_1);                   //[10, 20, 30, 40,50, 60, 80]

let arr14 = [10,20,30];
let arr15 = [30,40,50];                      
let arr16 = [...arr14,...arr15];             //[ 10, 20, 30, 30, 40, 50 ]
console.log(arr16);

let arr17 = [10,20,30,40,50];
let [a,b,c,d,e] = arr17;
console.log(a,b,c,d,e);                       //10 20 30 40 50

let arr18 = [10,20,30,40,50,60];
let [x,y,...z] = arr18;
console.log(z);                             //[ 30, 40, 50, 60 ]
let [var1, ...var2] = z;
console.log(var1);                          //30
console.log(var2);                          //[ 40, 50, 60 ]


let arr19 = [10,20,30,40,50,60];
//findIndex : to find the index of thge element
let i = arr19.findIndex((element, index)=>{
    return element == 30;
});
console.log(i);                            //2


let i2 = arr19.findIndex((element, index)=>{
    return element == 50;
});
console.log(i2);                              //4

let i3 = arr19.findIndex((element,index)=>{
    return  element == 70;
});
console.log(i3);                            //-1


//some() : if any one element is satisfiy the condition then its true.
let arr20 = [10,20,30,40,50];
let b1 = arr20.some((element,index)=>{
    return element <=10;
});
console.log(b1);                             //true

//every() : if every element is satisfiy the condition then its true.
let arr21 = [10,20,30,40,50];
let b2 = arr21.every((element, index)=>{
    return element>=100;
});
console.log(b2);                              //true

*/
let arr22 = [10,20,30,40,50];
let e1 = arr22.find((element)=>{
    return element==30;
});
console.log(e1);                              //30

let e2 = arr22.find((element)=>{
    return element ==300;                     //undefined
});
console.log(e2);

let arr23 = [10,20,30,40,50];
let c1 = arr23.includes(30);
console.log(c1);                                //true

let c2 = arr23.includes(300);
console.log(c2);                               //false
 




 