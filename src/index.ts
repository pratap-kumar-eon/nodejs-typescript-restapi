import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import connectToMongo from './config/db';

const app = express();

app.use(cors({
    credentials:true
}))
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json())

connectToMongo()
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})