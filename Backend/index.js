const express=require('express');
const mongoose=require('mongoose');
const informationRoute=require('./routes/informerRoute');
const userRoute=require('./routes/userRoute')
const cors=require('cors');
const app=express();
require('dotenv').config();

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   next();
 });

app.use(express.json());

const uri='mongodb://localhost:27017/ITPM_DB';
mongoose.set('strictQuery', true);

mongoose.connect(uri)
   .then(result => {
      console.log("Succesfully connected!!");
   }).catch(error => console.log(error));


   //Connect REST API
app.use('/api/informer',informationRoute);
app.use('/api/profile',userRoute);


app.listen(4000,()=>{
  console.log('server sucessfully running on the port 4000!!')
});
