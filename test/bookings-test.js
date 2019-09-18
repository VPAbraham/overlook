import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import data from '../src/data.js';

describe('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data, data, data, data)
  });

});