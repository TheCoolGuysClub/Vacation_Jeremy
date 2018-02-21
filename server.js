const weather = require(`./views/weather/weather.js`);
const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);
const axios = require(`axios`);
const app = express();

app.set(`view engine`,`hbs`);
app.use(express.static(path.join(__dirname,"public")));


hbs.registerPartials(path.join(__dirname,"view","partials"));
hbs.registerHelper(`getCurrentYear`,()=>{
  return new Date().getFullYear();
})
hbs.registerHelper(`weatherResults`,(lag,lng)=>{
  return weather.weatherResults(lag,lng);
})
app.get(`/`,(req,res)=>{
  // res.redirect(`www.paly.net`);
  res.render(`index.hbs`,{
      temperature:"",
      imgone:'https://www.ncl.com/sites/default/files/DestinationGalleries.Hawaii.SnorkelingBay900x400.jpg',
      imgtwo:'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121056-hawaii---travel-destination---shutterstock-457528552.jpg',
      imgthree: 'https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Hawaii1_Web72DPI_crop.jpg?itok=ZnJSRAUq',
    CityName:"",

  });
app.get(`/hawaii`,(req,res)=>{
  const lat =`34.0522342`;
  const lng =`-118.2436849`;
  weather.weatherResults(lat,lng)
  .then((response) => {
      res.render(`index.hbs`,{
        temperature:`The temperature of Hawaii is ${response.data.currently.temperature} degress!`,
        CityName:`Hawaii`,
        imgone:'https://www.ncl.com/sites/default/files/DestinationGalleries.Hawaii.SnorkelingBay900x400.jpg',
        imgtwo:'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121056-hawaii---travel-destination---shutterstock-457528552.jpg',
        imgthree: 'https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Hawaii1_Web72DPI_crop.jpg?itok=ZnJSRAUq',
      })
    })
});
app.get(`/venice`,(req,res)=>{
  const lat = `29.4241219`;
  const lng = `-98.49362819999999`;
  weather.weatherResults(lat,lng)
  .then((response)=>{res.render(`index.hbs`,{
    temperature:`The temperature of Venice is ${response.data.currently.temperature} degress! `,
    CityName:`Venice`,
    imgone:'https://fthmb.tqn.com/yaSJS3o6DipIAeihV5AMX9S8x-M=/960x0/filters:no_upscale()/italy--venice--elevated-view-of-canal-in-city-543346423-5982583b396e5a0011c9ef3e.jpg'
    imgtwo:'https://www.lacity.org/sites/g/files/wph781/f/styles/tiled_homepage_blog/public/bigstock-griffith-164078174.jpg?itok=By-CwsP2',
    imgthree: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufclbTHskY1mzRdqsRNjcpbHV0BI9z4tn9IbKIYcezuWfgvjKxQ',
  })
})


});
app.get(`/tokyo`,(req,res)=>{
  const lat=`41.8781136`;
  const lng = `-87.6297982`;
  weather.weatherResults(lat,lng)
  .then((response)=>{
    res.render(`index.hbs`,{
      temperature:`The temperature of tokyo is ${response.data.currently.temperature} degress!` ,
      CityName:`tokyo`,
      imgone:'https://fthmb.tqn.com/yaSJS3o6DipIAeihV5AMX9S8x-M=/960x0/filters:no_upscale()/italy--venice--elevated-view-of-canal-in-city-543346423-5982583b396e5a0011c9ef3e.jpg'
      imgtwo:'https://www.lacity.org/sites/g/files/wph781/f/styles/tiled_homepage_blog/public/bigstock-griffith-164078174.jpg?itok=By-CwsP2',
      imgthree: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufclbTHskY1mzRdqsRNjcpbHV0BI9z4tn9IbKIYcezuWfgvjKxQ',
    })
  })
});
//sentfile sent it to the excate location
// app.sendFile(__dirname+"/public");
})



//methods


app.listen(3000,()=>{
    // weather.weatherResults(41.8781136,-87.6297982);
  // console.log("lo");
console.log("Listening on port 3000!");
})
