const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users=[]


app.get('/login',(req,res)=>{
res.json(users);

});

app.post('/login',(req,res)=>{
  const user = {name: req.body.name, password: req.body.password }
  users.push(user)
  res.status(201).send()
  console.log(user);

});

app.listen(5000,()=>{
console.log("server connected");
});