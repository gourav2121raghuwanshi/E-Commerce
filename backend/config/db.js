const mongoose = require("mongoose")

async function connectDB(){
    console.log("in db file");
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {console.log("DB  is Successfull")})
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports = connectDB

