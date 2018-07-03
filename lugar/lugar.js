const axios = require('axios');

const getLugarLatlng = async (direccion) => {
  let encondedUrl = encodeURI(direccion);
  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyB4fgi6cK_-cV4YohoM4qItMvrfHjXmSMg`);
  if ( resp.data.status === 'ZERO_RESSULTS'){
    throw new Error(`No hay resultados para ${direccion}`);
  }
  let address = resp.data.results[0].formatted_address;
  let location = resp.data.results[0].geometry.location;
  let lat = location.lat;
  let lng = location.lng;
  //console.log(`Direccion: ${address}`);
  //console.log(`Latitud: ${lat}`);
  //console.log(`Longitud: ${lng}`);
  return {
    direccion: address,
    lat,
    lng
  }

}

module.exports = {
  getLugarLatlng
}
