
// res.redirect(/hawaii)

// app.use(express.static(path.join(__dirname, "public")));
const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);
const app= express();

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,"view","partials"))
app.get('/',(req,res)=>{
  res.render('index.hbs',{
    about:'About Vacations',
    content:'content of vaca',
    school:'Paly',
    pageTitle:'Home'
  });
//sentfile sent it to the excate location
// app.sendFile(__dirname+"/public");
})

app.get(`/main.css`,(req,res)=>{
  res.render(`main.css`,{
    // p{color:red}
  });
})

app.listen(3000,()=>{
  console.log("Active on port 3000........");
})
