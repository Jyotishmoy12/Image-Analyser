const express = require('express');
const cors= require('cors');

const uploadRoutes= require("./routes/uploadRoutes")

const app=express();
const PORT=5000;
app.use(cors());
app.use(express.json());
app.use("/api", uploadRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})