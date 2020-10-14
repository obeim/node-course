const { static } = require('express');
const express=require('express');
const hbs=require('hbs');
const app=express();


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
app.listen(3000,()=>{
console.log('listening on port 3000')
})