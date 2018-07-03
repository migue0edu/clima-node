const axios = require('axios');
const getClima = async(lat, lng) => {
  let resp =  await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=65401cf3433e8ac6690881e73793220b`);
   if ( resp.data.cod !== 200){
     console.log(resp.data.cod);
     throw new Error(`No se pudo obtener el clima en la ubicacion especificada.`);
   }
  return resp.data.main.temp;
}

module.exports = {
  getClima
}
