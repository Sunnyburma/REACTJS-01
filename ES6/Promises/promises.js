//Promises are use to make "async" calls
//Promises are alternative solution for callbacks
//Promises are spacial Javascript objects
//We will create Proises with the help of "Promises" class
//We will consume Promises in two ways
//1) then()
//2) async & await keywords 
// Promises have three States
//1) Pending state
//2) Successs State / Resolve State
//3) Failure State / Reject State
/*
let promises1 = new Promise((resolve, reject)=>{ 
       resolve("welcome to promises");
});
promises1.then((posRes)=>{
        console.log(posRes);
},(errorRes)=>{
    console.log(errorRes);
});
*/

/*
let promises11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("welcome to promises11");
    },2000);
}); 
let promises22 = new Promise((success,Failure)=>{
    setTimeout(()=>{
        console.log("welcome to promises22");
    },10000);
});
let promises33 = new Promise((success,failure)=>{
    setTimeout(()=>{
        console.log("welcome to promises33");
    },15000);
})

promises11.then((posRes)=>{
    console.log(posRes),(errorRes)=>{
        console.log(errorRes);
    }
});

promises22.then((posRes)=>{
    console.log(posRes)
},(errorRes)=>{
    console.log(errorRes);
});

promises33.then((posRes)=>{
    console.log(posRes);
},(errorRes)=>{
    console.log(errorRes);
});
Promise.all([promises11,promises22,promises33]).then((posRes)=>{
    console.log(posRes);
},(errorRes)=>{
    console.log(errorRes);
});
*/

/*
let promises11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("welcome to promises11");
    },2000);
}); 
let promises22 = new Promise((success,Failure)=>{
    setTimeout(()=>{
        console.log("welcome to promises22");
    },10000);
});
let promises33 = new Promise((success,failure)=>{
    setTimeout(()=>{
        console.log("welcome to promises33");
    },15000);
})

Promise.all([promises11,promises22,promises33]).then((posRes)=>{
    console.log(posRes);
},(errorRes)=>{
    console.log(errorRes);
});
// its execute the code one by one 5sec, 10sec,15sec
//welcome to promises11
//welcome to promises22
//welcome to promises33
*/

let promises11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("welcome to promises11");
    },2000);
}); 
let promises22 = new Promise((success,Failure)=>{
    setTimeout(()=>{
        success("welcome to promises22");
    },10000);
});
let promises33 = new Promise((success,failure)=>{
    setTimeout(()=>{
        success("welcome to promises33");
    },15000);
})

Promise.all([promises11,promises22,promises33]).then((posRes)=>{
    console.log(posRes);
},(errorRes)=>{
    console.log(errorRes);
});
//output
//its in array format and execute the code in 15sec
//[
//    'welcome to promises11',
//    'welcome to promises22',
//    'welcome to promises33'
//  ]
