const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");

const productRoute = require("./routes/product");
const catigoryRoute = require("./routes/catigory");
const opinionRoute = require("./routes/opinion");

const catigoryArabicRoute = require("./routes/catigoryArabic");
const opinionArabicRoute = require("./routes/opinionArabic");
const productArabicRoute = require("./routes/productArabic");


 
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });



app.use(cors({
  origin:["http://localhost:3000" , 
  "https://egypt-excursions.onrender.com/"]
}));
app.use(express.json());
 
app.use("/api/products", productRoute);
app.use("/api/catigories", catigoryRoute);
app.use("/api/opinions", opinionRoute);

app.use("/api/catigoriesArabic", catigoryArabicRoute);
app.use("/api/opinionsArabic", opinionArabicRoute);
app.use("/api/productsArabic", productArabicRoute);



 


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running")
});
