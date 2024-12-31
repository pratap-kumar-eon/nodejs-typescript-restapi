import mongoose from 'mongoose';

const connectToMongo = ()=>{
    const MONGO_URL = 'mongodb+srv://pratapnayakdev:pratapnayakdev@cluster0.kehl6.mongodb.net/node_typescript';
    const conn = mongoose.connect(MONGO_URL);
    try {
        if(conn){
            console.log("Connected to DB")
        }
    } catch (error) {
        console.log('Unable to Conn',error)
    }    
}

export default connectToMongo;