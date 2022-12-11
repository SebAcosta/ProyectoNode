const express = require('express')
const morgan = require('morgan')
//ROUTERS
const app = express();
const empleados = require('./routes/empleados')
const user = require('./routes/user')
//MIDDLEWARE
const auth = require('./middleware/auth')
const notFound = require('./middleware/notFound')
const indexMid = require('./middleware/index')
const cors = require('./middleware/cors')

app.use(cors)
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",indexMid)
app.use("/user",user)
app.use(auth)
app.use("/empleados",empleados)

app.use(notFound)

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running")
})