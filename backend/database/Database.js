const mongoose = require('mongoose')

uri = "mongodb+srv://yash277:yg277@clone.ykpngad.mongodb.net/Clone?retryWrites=true&w=majority";

const connectdatabse = ()=>{
    console.log("Connect db");
    mongoose.set('strictQuery', false);
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        }).then((data)=>{
        console.log(`Database connected ${data.connection.host}`)
    })
}
module.exports = connectdatabse;