const express = require('express');
const cors = require('cors');
const bycrypt=require('bcrypt');
const app = express();

app.use(cors());
app.use(express.json());
app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false }))

const users=[]


app.get('/login',(req,res)=>{
res.json(users);

});
app.get('/home/login',(req,res)=>{
  res.render('login.ejs')
});

app.get('/home/register',(req,res)=>{
  res.render('registration.ejs')
});


app.post('/home/register', async(req,res)=>{
  try{
    const hashPassword = await bycrypt.hash(req.body.password,10)
    users.push({
      id:Date.now().toString(),
      name:req.body.name,
      email:req.body.email,
      password:hashPassword
    })
    res.redirect('/home/login')
  }catch{
    res.redirect('/home/register')

  }
  console.log(users)
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