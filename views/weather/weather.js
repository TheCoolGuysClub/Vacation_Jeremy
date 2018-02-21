const axios = require(`axios`);
const weatherResults = (lag,lng)=>{
      let temperature = null;
        const wethercodeURL = `https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${lag},${lng}`;
        return axios.get(wethercodeURL);

  }
module.exports = {
  weatherResults
}
