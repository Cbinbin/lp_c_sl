# lp_c_sl


## 安装
```js
  npm install lp_c_sl
```

## 查看省
```js
  var p_c_s = require('lp_c_sl')

  console.log(p_c_s.getprov())
```

## 查看市
```js
  var p_c_s = require('lp_c_sl')
  var provcode = 44

  console.log(p_c_s.getcity(provcode))
```

## 查看区
```js
  var p_c_s = require('lp_c_sl')
  var citycode = 4451

  console.log(p_c_s.getdist(citycode))
```

注：北京、天津、重庆、上海 要通过 「查看区」 查看