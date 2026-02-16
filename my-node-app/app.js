// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express!");
// });

// app.get("/about", (req, res) => {
//   res.send("This is About Page");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
  

 setTimeout(()=>{
  console.log("1")
  setTimeout(()=>{
    console.log("1")
    setTimeout(()=>{

    })
  })
})

const fs = require("fs");
fs.readFile("file.txt","utf-8",function(err,data){
  if(err){
    console.log(data)
  }
  else{
    console.log(err)
  }
  console.log(data)
})



const nayapromise = new Promise((resolve,reject)=>{
  let deliver = true;
  if(deliver){
    resolve("order deliver ho gaya")
  }
  else{
    reject("ni hua deliver")
  }
})
nayapromise
.then(()=>console.log("ye hua resolve"))
.catch(()=> console.log("ye hua resolve")) 



const fs = require("fs")
fs.promises.readFile("file.txt","utf-8")
.then((data) => console.log(data))
.catch((err)=> console.log(err.message))




