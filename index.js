const provinces = require('./lib/provinces')
  , searchCity = require('./lib/cities/funs/searchCity')
  , districts = require('./lib/districts/index')

function getdist(cityCode) {
  var dists = []
  districts.map((item)=> {
    if(String(cityCode) == item.city_code) dists = item.district
  })
  return dists
}

module.exports = {
  getprov: provinces,
  getcity: searchCity,
  getdist: getdist
}