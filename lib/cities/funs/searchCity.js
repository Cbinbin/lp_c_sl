const Anhui = require('../Anhui')
  , Fujian = require('../Fujian')
  , Gansu = require('../Gansu')
  , Guangdong = require('../Guangdong')
  , Guangxi = require('../Guangxi')
  , Guizhou = require('../Guizhou')
  , Hainan = require('../Hainan')
  , Hebei = require('../Hebei')
  , Heilongjiang = require('../Heilongjiang')
  , Henan = require('../Henan')
  , Hubei = require('../Hubei')
  , Hunan = require('../Hunan')
  , Jiangsu = require('../Jiangsu')
  , Jiangxi = require('../Jiangxi')
  , Jilin = require('../Jilin')
  , Liaoning = require('../Liaoning')
  , Neimenggu = require('../Neimenggu')
  , Ningxia = require('../Ningxia')
  , Qinghai = require('../Qinghai')
  , Shan_xi = require('../Shan_xi')
  , Shandong = require('../Shandong')
  , Shanxi = require('../Shanxi')
  , Sichuan = require('../Sichuan')
  , Taiwan = require('../Taiwan')
  , Xinjiang = require('../Xinjiang')
  , Xizang = require('../Xizang')
  , Yunnan = require('../Yunnan')
  , Zhejiang = require('../Zhejiang')

function searchCity(provCode) {
  var cities = null
  switch(String(provCode)) {
    case '34': cities = Anhui;break
    case '35': cities = Fujian;break
    case '62': cities = Gansu;break
    case '44': cities = Guangdong;break
    case '45': cities = Guangxi;break
    case '52': cities = Guizhou;break
    case '46': cities = Hainan;break
    case '13': cities = Hebei;break
    case '23': cities = Heilongjiang;break
    case '41': cities = Henan;break
    case '42': cities = Hubei;break
    case '43': cities = Hunan;break
    case '32': cities = Jiangsu;break
    case '36': cities = Jiangxi;break
    case '22': cities = Jilin;break
    case '21': cities = Liaoning;break
    case '15': cities = Neimenggu;break
    case '64': cities = Ningxia;break
    case '63': cities = Qinghai;break
    case '61': cities = Shan_xi;break
    case '37': cities = Shandong;break
    case '14': cities = Shanxi;break
    case '51': cities = Sichuan;break
    case '71': cities = Taiwan;break
    case '65': cities = Xinjiang;break
    case '54': cities = Xizang;break
    case '53': cities = Yunnan;break
    case '33': cities = Zhejiang;break
    default: cities = []
  }
  return cities
}

module.exports = searchCity