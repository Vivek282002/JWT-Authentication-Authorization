const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter.js");
const ProductRouter = require("./Routes/ProductRouter.js");


require("dotenv").config();
require("./Models/db.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.send("Hello from backend");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})