const index = require('../index')
  , expect = require('chai').expect

describe('index：功能测试', ()=> {
  describe('index.getprov', ()=> {
    it('全部省份', ()=> {
      expect(index.getprov()).to.be.an('array')
    })
  })

  describe('index.getcity', ()=> {
    it('广东省', ()=> {
      expect(index.getcity(44)).to.be.an('array')
    })
  })

  describe('index.getdist', ()=> {
    it('潮州市', ()=> {
      expect(index.getdist(4451)).to.be.an('array')
    })
  })
})