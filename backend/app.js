const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectTODB = require('./db/connectToDB');
const taskRoute = require('./routes/taskRoute');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/task',taskRoute);
app.use('/', (req,res)=>{
res.send("<h1>Hello Api</h1>");
});

app.listen(process.env.PORT, async()=>{
    console.log(`Server connected to Port ${process.env.PORT}`);
    await connectTODB();
});