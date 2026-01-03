require('dotenv').config();
let app=require('./app')
let statusrouter=require('./src/routes/status.routes')
let factrouter=require('./src/routes/fact.routes')
app.use('/',statusrouter)
app.use('/api',factrouter)
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})