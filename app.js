const { static } = require('express');
const express=require('express');
const hbs=require('hbs');
const app=express();

const port=process.env.PORT || 3000;
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})
hbs.registerPartials(__dirname +'/views/partials')
app.use(express.static(__dirname +'/public'))
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('index',{title:'home'})
})
app.get('/about',(req,res)=>{
res.render('about',{title:'about'})
})
app.get('/Projects',(req,res)=>{
    res.render('projects',{title:"My Projects"});
})
app.listen(port,()=>{
console.log(`listening in port ${port}`)
})