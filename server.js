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
      temperature:`Choose a city!`,
    imgone:`https://mitechnews.com/wp-content/uploads/2017/08/on-vacation.jpg`,
    imgtwo:`http://i2.cdn.turner.com/money/dam/assets/140730120927-employee-mandatory-vacation-1024x576.jpg`,
    imgthree:`https://www.lachicotte.com/images/rotate/vacation-rentals-slider3.jpg`,
    CityName:`Choose Your City`,

  });
app.get(`/losangelos`,(req,res)=>{
  const lat =`34.0522342`;
  const lng =`-118.2436849`;
  weather.weatherResults(lat,lng)
  .then((response) => {
      res.render(`index.hbs`,{
        temperature:`The temperature of Los Angelos is ${response.data.currently.temperature} degress!`,
        CityName:`Los Angelos`,
        imgone:`http://travel.home.sndimg.com/content/dam/images/travel/fullset/2011/09/12/af/chicago-lake-shore-drive.rend.hgtvcom.616.462.suffix/1491585454223.jpeg`,
        imgtwo:`http://vacationpackagesallinclusiv-e.com/wp-content/uploads/2012/10/Chicago.jpg`,
        imgthree:`http://athomemms.com/index/wp-content/uploads/2014/03/What-to-do-in-Chicago-IL-fun-family-vacation-ideas-.jpg`
      })
    })
});
app.get(`/sanantonio`,(req,res)=>{
  const lat = `29.4241219`;
  const lng = `-98.49362819999999`;
  weather.weatherResults(lat,lng)
  .then((response)=>{res.render(`index.hbs`,{
    temperature:`The temperature of San Antonio is ${response.data.currently.temperature} degress! `,
    CityName:`San Antonio`,
    imgone:`https://www.chcp.edu/sites/default/files/CHCP-San-Antonio-Campus.jpg`,
    imgtwo:`https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/10152/SITours/san-antonio-super-pass-in-san-antonio-424265.jpg`,
    imgthree:`http://www.planetware.com/photos-large/USTX/texas-san-antonio-things-to-do-the-saga.jpg`
  })
})


});
app.get(`/chicago`,(req,res)=>{
  const lat=`41.8781136`;
  const lng = `-87.6297982`;
  weather.weatherResults(lat,lng)
  .then((response)=>{
    res.render(`index.hbs`,{
      temperature:`The temperature of Chicago is ${response.data.currently.temperature} degress!` ,
      CityName:`Chicago`,
      imgone:`https://urbanmatter.com/chicago/wp-content/uploads/2015/04/Chicago-Architecture.jpg`,
      imgtwo:`http://www.essexinn.com/d/essexinn/media/Attractions/3583017878_ee2e8e3d8b_b_1423674445483.jpg`,
      imgthree:`https://i.kinja-img.com/gawker-media/image/upload/s--T0-K6gLo--/c_scale,fl_progressive,q_80,w_800/wtcnqekq9zwta5gpq48r.jpg`
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
