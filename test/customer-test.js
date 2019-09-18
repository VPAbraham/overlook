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

  it('should be a function that will instantiate customers', () => {
    expect(Customer).to.be.a('function');
    expect(hotel.customers[10]).to.be.an.instanceof(Customer);
  });

  it('should be able to store its\' own bookings', () => {
    expect(hotel.customers[4].bookings.shift().userID).to.equal(5);
  });

  it('should be able to find its\' room services on a given date', () => {
    expect (hotel.customers[12].getRoomServicesByDate('2019/10/01').shift().food).to.equal('Handcrafted Metal Sandwich');
  })

  it('should be able to find all of it\'s room services', () => {
    expect(hotel.customers[12].getAllRoomServices().length).to.equal(2);
  })

});