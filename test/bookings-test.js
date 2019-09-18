import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import Bookings from '../src/Bookings.js'
import data from '../src/data.js';

describe('Bookings', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data, data, data, data)
    hotel.hotelPrepHandler()
  });



});