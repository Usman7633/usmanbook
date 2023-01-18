const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './.env' });
const app = require('./app');

const DB = process.env.DB_URI


mongoose.set("strictQuery", false);
mongoose.connect(DB, {
   useNewUrlParser: true, 
  useUnifiedTopology: true 
  }).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server= app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`)

})


//Routes go here
app.all('*', (req,res) => {
    res.json({"every thing":"is awesome"})
})

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  // server.close(() => {
  //   process.exit(1);
  // });
});
