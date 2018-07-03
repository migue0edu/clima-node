
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima.',
    demand: true
  }
}).argv;

let getInfo = async () => {
  try{
    let coords = await lugar.getLugarLatlng(argv.direccion);
    let temp = await clima.getClima(coords.lat, coords.lng);

    return `El clima en ${coords.direccion} es de ${temp}`;
  }catch(e){
    return (`No se pudo determinar la temperatura en esta direccion.`);
  }

}

getInfo( argv.direccion)
  .then( mensaje => console.log(mensaje))
  .catch(e => console.log(e));
// lugar.getLugarLatlng ( argv.direccion)
//   .then( resp => {
//     console.log(resp)
//   })
//   .catch(e => console.log(e));

// clima.getClima(9.9280684, -84.0907246)
//   .then(temp => console.log(temp))
//   .catch(e => console.log(e));
