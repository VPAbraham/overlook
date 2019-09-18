import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import Bookings from '../src/Bookings.js'
import Customer from '../src/Customer.js';
import data from '../src/data.js';

describe('Bookings', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data, data, data, data)
    hotel.hotelPrepHandler()
  });

   it('should be a function', () => {
    expect(Bookings).to.be.a('function')
  });

  it('should be a function', () => {
    expect(hotel.bookingDb).to.be.an.instanceof(Bookings)
  });

  it('should store all bookings', () => {
    expect(hotel.bookingDb.bookings.length).to.equal(51)
  });

  it('should be able to get all currently booked rooms for a given day', () => {
    expect(hotel.bookingDb.getCurrentlyBooked('2019/10/19').shift().roomNumber).to.equal(5)
  });

  it('should be able to get all vacant rooms for a given day', () => {
    expect(hotel.bookingDb.getCurrentlyAvailable('2019/10/19').length).to.equal(49)
  });

  it('should be able to get a room object from a room number', () => {
    expect(hotel.bookingDb.getRoom(1).roomType).to.equal('residential suite')
  });
  
it('should be able to get a room object from a room number', () => {
    expect(hotel.bookingDb.getPopularBookingDate().date).to.equal('2019/09/01')
  });

it('should be able to get a room object from a room number', () => {
    expect(hotel.bookingDb.getUnpopularBookingDate().date).to.equal('2019/10/19')
  });  

it('should be able to get a user bookings by id number', () => {
    expect(hotel.bookingDb.returnUserBookingsById(29).shift().roomNumber).to.equal(35)
  }); 

});