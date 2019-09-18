import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import Customer from '../src/Customer.js';
import Bookings from '../src/Bookings.js'

import data from '../src/data.js';

describe('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data, data, data, data)
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function')
  });

  it('should be able to store data from datasets', () => {
    expect(data).to.be.an('object');
  });

  it('should be able to store users from datasets', () => {
    expect(hotel.users).to.be.an('array');
  });

  it('should be able to store rooms from datasets', () => {
    expect(hotel.rooms).to.be.an('array');
  });

  it('should be able to store bookings from datasets', () => {
    expect(hotel.bookings).to.be.an('array');
  });

  it('should be able to store room services from datasets', () => {
    expect(hotel.roomServices).to.be.an('array');
  });

  it('should be able to instatiate and store customers from datasets', () => {
    expect(hotel.customers).to.be.an('array');
  });

  it('should be able to set the current day', () => {
    hotel.getCurrDay();
    expect(hotel.currentDay).to.deep.equal('2019/09/18');
  });
  
  it('should be able to retrieve customer booking data', () => {
    expect(hotel.getCustomerBookings(18).shift().date).to.equal('2019/09/26');
  });

  it('should be able to retrieve customer room data', () => {
    expect(hotel.getCustomerRoomServices(85).shift().food).to.equal('Incredible Cotton Sandwich');
  });

  it('should be able to retrieve customer room service data', () => {
    expect(hotel.getCustomerRooms(100).shift().costPerNight).to.equal(327.76);
  });

  it('should be able to instantiate customers using given data', () => {
    expect(hotel.customers.length).to.equal(20);
  })

  it('should be able search for customers with their user data', () => {
    expect(hotel.getCustomerByName('Christian Sporer').id).to.equal(3);
    expect(hotel.getCustomerById(9).name).to.equal('Paula Anderson');
  })

  it('should be able to instantiate bookings using given data', () => {
    expect(hotel.bookingDb).to.be.an('object');
  })

  it('should be able to make a menu with the given room service data', () => {
    expect(hotel.menu.length).to.equal(53);
  })

  it('should be able to retrieve customer objects by name', () => {
    expect(hotel.getCustomerByName('Noemy Little').name).to.equal('Noemy Little');
  })

  it('should be able to retrieve customer objects by id number', () => {
    expect(hotel.getCustomerById(5).name).to.equal('Noemy Little');
  })

  it('should be able to retrieve customer bookings by id number', () => {
    expect(hotel.getCustomerBookings(5).shift().roomNumber).to.equal(19);
  })

  it('should be able to get all room services for a given day', () => {
    expect(hotel.getRoomServicesByDay('2019/09/11').shift().food).to.equal('Awesome Cotton Sandwich');
  })

  it('should be able to get room service revenue for the current day', () => {
    expect(hotel.getRoomServiceRevToday()).to.equal(0);
  })

   it('should be able to get room service revenue for the current day', () => {
    expect(hotel.getRoomServiceRevToday()).to.equal(0);
  })

 it('should be able to add new customers', () => {
    expect(hotel.addCustomer('Victor Abraham').id).to.equal(21)
  })

});