import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import data from '../src/data.js';

describe('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(data[0], data[1], data[2], data[3])
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function')
  });

  it('should be able to store data from datasets', () => {
    console.log(hotel);
    expect(data.length).to.equal(4);
    expect(hotel.users).to.be.an('object');
    expect(hotel.rooms).to.be.an('object');
    expect(hotel.bookings).to.be.an('object');
    expect(hotel.roomService).to.be.an('object');
  });

  it('should be able to set the current day', () => {
    hotel.getCurrDay();
    expect(hotel.currentDay).to.deep.equal('2019/09/12');
  });

  it('should be able to get', () => {
    expect().to.equal();
  });


});