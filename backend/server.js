import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"
 
const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();
app.use(express.json()); // allows us to use json data in the req body

app.use("/api/products", productRoutes);

app.listen(5000, ()=>{
    connectDB();
    console.log("Server Started At http://localhost:5000");
});

