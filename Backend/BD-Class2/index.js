const express = require("express");
const app = express();

app.use(express.json());

require("./config/database").connect();

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());   

// routes - import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

require("dotenv").config();
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server is started on ${PORT}`);
})
