import express from 'express'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import dotenv from 'dotenv'
import fileRoutes from './routes/file.routes.js'
import mailRoutes from './routes/mail.routes.js'

const app = express()

dotenv.config()

const PORT = 5000

app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/files',fileRoutes)
app.use('/api/mails',mailRoutes)



connectDB() 

app.listen(PORT,()=>{
    console.log(`Server is running on Port : ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("Coldmailer API is runnning");
})