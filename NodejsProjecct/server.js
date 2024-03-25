const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv=require("dotenv").config();

const connectDb=require("./Config/dbConnection");
const cors = require('cors');
const app= express();
// Use CORS middleware
app.use(cors());
connectDb();

const port=process.env.PORT||5000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"))
app.use("/api/resumes",require("./routes/resumeRoutes"))
app.use(errorHandler);
app.listen(port,()=>{console.log('Server running on port ${port}')} );
