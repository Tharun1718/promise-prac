/*
let promiseObj=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let data=["apple","orange","banana"];
        if(data.includes("mango")){
            resolve(data);
        }else{
            reject("given fruit is not available");

        }
    },3000);
});

promiseObj.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise is done");
});
*/

let takeTest=new Promise((resolve, reject) =>{
    let istakeTest=true;
    if(istakeTest){
        resolve("I took the test");
    }else{
        reject("I didn't take the test");
    }
});

let passedTest=new Promise((resolve, reject)=>{
    let ispassedTest=true;
    if(ispassedTest){
        resolve("I passed the test");
    }else{
        reject("I didn't passed the test");
    }
});

let gotJob=new Promise((resolve, reject)=>{
    let isgotJob=true;
    if(isgotJob){
        resolve("I got a job");
    }else{
        reject("I didn't got a job");
    }
});

/*
takeTest.then((msg)=>{
    let the_msg=msg;
    passedTest.then((msg)=>{
        the_msg+=msg;
        gotJob.then((msg)=>{
            the_msg+=msg;
            console.log(the_msg);
        }).catch((msg)=>{
            console.log(msg);
        }).catch((msg)=>{
            console.log(msg);
        }).catch((msg)=>{
            console.log(msg);
        })
    })
})
*/

let roomClean=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Room is cleaned");
        reject("Room is not cleaned");
    },3000);
});

let getGarbage=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Garbage is cleaned");
        reject("Garbage is not cleaned");
    },2000);
});

let winPrize=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Price won");
        reject("won nothing");
    },1000);
});
/*
let allPromise=Promise.all(["roomClean","getGarbage","winPrize"]);

allPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
*/
roomClean.then((res)=>{
    console.log(res);
    return getGarbage;
}).then((res)=>{
    console.log(res);
    return winPrize;
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("all done");
});