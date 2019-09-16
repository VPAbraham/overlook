import $ from 'jquery';
import Hotel from './Hotel';
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
      reservedRooms += `<td class="table-items">Room ${booking.roomNumber}</td>`
    });
    $('.res-rooms').html(reservedRooms)
  },

  displayAvailableRooms(rooms) {
    let vacantRooms = '';
    rooms.forEach(room => {
      vacantRooms += `<td class="table-items">Room ${room.number}</td>`    
    });
    $('.av-rooms').html(vacantRooms);
  },

  displayPercentRoomsAvailable(num) {
    $('.percent-rooms-av').text(`${num}% of rooms are still available.`)
  },

  displayTotalBookingRev(rev) {
    $('.daily-book-rev').text(`Today, the hotel has made $${rev} in booking revenue.`)
  },

  displayTotalRoomServiceRev(rev) {
    $('.daily-service-rev').text(`Today, the hotel has made $${rev} in room service revenue.`)
  },

  displaySearchedCustomer(input) {
    let customerProfile = ''
    if (input) {
      customerProfile = 
      `<p class="search-resp">Currently selected: ${input.name}</p><p class="search-resp"></p>`;
      $('.customer-search-display').html(customerProfile)
      return true;
    } else {
      customerProfile = '<p class="search-resp">This user does not exist in our database. You may add them or try another name.</p>';
      $('.customer-search-display').html(customerProfile)
      return false;
    }
  }



}

export default domUpdates;