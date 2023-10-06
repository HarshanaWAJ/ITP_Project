//Import Dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require("./routes/book-routes");
const applicantRoutes = require('./routes/applicant')

const app = express();

//Create PORT
const PORT = process.env.PORT ||8080;


//Middleware for app
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
  })


const URL = process.env.MONGODB_URL;

//Create db connection
mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open" ,() =>{
   try {
    console.log("Mongodb connection established")
    }catch(err){
        console.log(err)
    }
})

//Import routes
const adminRoute = require('./routes/Admin.js');
const newsRoutes = require('./routes/News.js');

const businessRoute = require('./routes/student.route.js');

//Routes
app.use("/admin", adminRoute);
app.use("/news", newsRoutes);
app.use("/books",router); 
app.use("/campus",businessRoute);
app.use('/api/applicant',applicantRoutes)

//Create PORT connection
app.listen(PORT, ()=> {
    try {
        console.log(`Server listening on ${PORT}`);
    } catch(err){
        console.log(err);
    }
})