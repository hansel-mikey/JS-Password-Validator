

// let Val= function getData(dataID,getnextData){
    
//    let promiseval= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     if(dataID && getnextData){
//             console.log(`Data ID : ${dataID} \n Name : ${getnextData}`);
//             resolve("Sucess")
//             console.log(promiseval);
//         }
//         else{
//             reject("error");
//               console.log(promiseval);
//         }
// },4000)

//     })
//     console.log(promiseval);
// }




// Val('123','hansel');


// Val();
// Using Promsie
// Fulfilled
// Whenever a Promise is fullfiled we use .then method to displayy or use this response

// Rejected 
// // Whenever a Promise is Rejcted then we use .catch to dispalay the reject or use this resposne
// const getpromise= (dataID1,dataID2)=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(dataID1 && dataID2){
//             if(dataID1==="123" && dataID2==="Hansel"){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         }
//         else{
//             reject();
//         }
    
//     },5000);

// })

// }
// let value= getpromise("123","Hansel");
// setTimeout(() => {
//  value= getpromise();   
//  value.catch(()=>{
//     console.log("No Value is Provided")
// })
// },5000);
// value.then(()=>{
//     console.log("Matched")
// })
// Promis Chain 
// First this should Execute
// function asyncFunction1(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1")
//             resolve()

//         },3000)

//     })
// }
// After First this should Execute
// function asyncFunction2(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2")
//             resolve()

//         },3000)

//     })
// }

//  console.log("Fetching Data 1")
// asyncFunction1().then((res)=>{
//     console.log("Fetching Data 2")
//     asyncFunction2().then(()=>{
    
//     })
    
// })

const username=document.getElementById("username");


const password=document.getElementById("password");

const submitbtn=document.getElementById("submitButton");
// let UsernameValidator=()=>{
//     return new Promise((resolve,reject)=>{
//         if(username.value && password.value){
//             resolve("Susses")
//         }
//         else{
//             reject("error")
//         }
//     })
// }
// Old Code using Promise Channing =
// submitbtn.addEventListener('click',()=>{
//     console.log(username.value);
//     console.log(password.value);
//     UsernameValidator().then((res)=>{
//     console.log(res);
//      UsernameValidator().catch((res)=>{
//         console.log(res);
//      })
// })
// })

let userDB=[{
    name:"Hansel",
    Password:"Hansel1"
}]
// Username Finder
function userName(Data1){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if(Data1){
                
                if(userDB.find((u)=>u.name===Data1)){
                    console.log("UserFound")
                    resolve("User Matched")
                }
                else{
                    reject("userNotFound")
                }
            }
        },2000);

    })
}
// Password Finder
function passWord(Data2){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if(Data2){
                
                if(userDB.find((u)=>u.Password===Data2)){
                    console.log("Password Matched user Logged in")
                    resolve("password Matched")
                }
                else{
                    console.log("Password Wrong")
                    reject("Password Didnot Match !!")
                }
            }
        },2000);

    })
}
submitbtn.addEventListener('click',async ()=>{

    //First This will be Validated
    await userName(username.value);
    // Then this will be Validated
    await passWord(password.value);

    


})

