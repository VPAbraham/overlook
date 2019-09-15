import $ from 'jquery';
// import 'jquery-ui-bundle';
// import './css/base.scss';
// import Hotel from '../src/Hotel.js';
// import Bookings from '../src/Bookings.js';
// import Customer from '../src/Customer.js';

const domUpdates = {

  displayDate(date) {
    $('.date-display').text(date);
  },

  displayReservedRooms(bookings) {
    let reservedRooms = '';
    bookings.forEach(booking => {
      reservedRooms += `<p>${booking.roomNumber}</p>`
    });
    $('.res-rooms').html(reservedRooms)
  }



}

export default domUpdates;