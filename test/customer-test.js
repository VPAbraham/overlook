import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import Customer from '../src/Customer.js';
import Bookings from '../src/Bookings.js'
import data from '../src/data.js';

describe('Customer', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data, data, data, data)
    hotel.hotelPrepHandler()
  });

  it('should be a function that will instatiate customers', () => {
    expect(Customer).to.be.a('function');
    expect(hotel.customers[10]).to.be.an.instanceof(Customer);
  });


  it('should be a function that will instatiate customers', () => {
    expect(hotel.customers[0].getCurrentBooking()).to.deep.equal(1);
  });


});