const mongoose = require('mongoose')


mongoose.connect(process.env.CONNECTION_STRING).then(
    result =>{
        console.log("MongoDB Atlas connected with PFSERVER");
    }
).catch(
    err=>{
        console.log("Connection failed...");
        console.log(err);
    }
)