import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import data from '../src/data.js';

describe('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data.users, data.rooms, data.bookings, data.roomServices)
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function')
  });

  it('should be able to store data from datasets', () => {
    expect(data).to.be.an('object');
    expect(hotel.users).to.be.an('array');
    expect(hotel.rooms).to.be.an('array');
    expect(hotel.bookings).to.be.an('array');
    expect(hotel.roomServices).to.be.an('array');
  });

  it('should be able to set the current day', () => {
    hotel.getCurrDay();
    expect(hotel.currentDay).to.deep.equal('2019/09/12');
  });

  it('should be able to get customer names', () => {
    expect(hotel.getCustomerBookings(18).shift().date).to.equal('2019/09/26');
    expect(hotel.getCustomerRoomServices(85).shift().food).to.equal('Incredible Cotton Sandwich');
    expect(hotel.getCustomerRooms(100).shift().costPerNight).to.equal(327.76);
  });

  it('should be able to ')


});