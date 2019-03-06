const utils = require('./utils');
const expect = require('expect');
// const expect = require('chai').expect;

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(30, 30);

      expect(res).toBe(60);
      // if (res !==60){
      //   throw Error(`Expected 60, but got ${res}`);
      // } 
    });
  });

  describe('#asyncAdd', () => {
    it('should expect async add two numbers', (done) => {
      utils.asyncAdd(20, 20, (sum) => {
        expect(sum).toBe(40);
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square two numbers', () => {
      let res = utils.square(3);

      expect(res).toBe(9);
      // if (res !==9){
      //   throw Error(`Expected 9, but got ${res}`);
      // } 
    });
  });

  describe('#asyncSquare', () => {
    it('should expect async square two numbers', (done) => {
      utils.asyncSquare(10, (square) => {
        expect(square).toBe(100);
        done();
      });
    });
  });

  // describe('#User', () => {
  //   it('should set firstName and lastName', () => {
  //     let user = { location: 'Lagos', age: 29 };
  //     let res = utils.setName(user, 'Chuka Okonkwo');

  //     expect(res).toInclude({
  //       firstName: 'Chuka',
  //       lastName: 'Okonkwo'

  //     });
  //   });
  // });
});