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

  displayNothingHere(elem) {
    [elem].append(
      '<p>Nothing to Show Here!</p>'
    )
  },

  //? displaySearchedCustomer(input) {
  // ?  let customerProfile = ''
  //  ? if (input) {
  //   ?  customerProfile = 
  //    ? `<p class="search-resp">Currently selected: ${input.name}</p><p class="search-resp"></p>`;
  //     $('.customer-search-display').html(customerProfile)
  //     return true;
  //   } else {
  //     customerProfile = '<p class="search-resp">This user does not exist in our database. You may add them or try another name.</p>';
  //     $('.customer-search-display').html(customerProfile)
  //     return false;
  //   }
  //? }, 

  displaySearch(results) {
    $('.customer-search-display').empty();
    if (results.length > 0 && results.length < 100) {
      let filtElems = results.slice(0, 20).map(result =>
        `<article class="search-resp">
          <h2 class="retr-name" data-id="${result.name}">${result.name}</h2>
         </article>`).join('');
      $('.customer-search-display').append(filtElems);
    }
  },

  displayMostBooked(most, least) {
    $('.most-booked').text(`Those most booked day is currently ${most.date} with ${most.count} customers.`)
    $('.least-booked').text(`Those least booked day is currently ${least.date} with ${least.count} customers.`)
  },

  displayRoomsForDateSel(rooms) {
    $('.av-room-search-disp').empty();
    let vacRooms = 
    `<tr>
      <th>Number</th>
      <th>Type</th>
      <th>Bidet</th>
      <th>Bed Size</th>
      <th># Beds</th>
      <th>Cost</th>
    </tr>`;
    rooms.forEach(room =>
      vacRooms +=
      `<tr class="room-selector" room-id="${room.number}">
        <th>${room.number}</th>
        <th>${room.roomType}</th>
        <th>${room.bidet}</th>
        <th>${room.bedSize}</th>
        <th>${room.numBeds}</th>
        <th>${room.costPerNight}</th>
      </tr>`
    )
    $('.av-room-search-disp').append(vacRooms);
  },

  displayTodayOrders(orders, elem) {
    elem.empty();
    let ordersTable =
      `<tr>
      <th>Order</th>
      <th>Food</th>
      <th>Cost</th>
    </tr>`
    if (orders) {
      orders.forEach(order =>
        ordersTable +=
      `<tr class="order-selector" order-id="${order.number}">
        <th>${order.date}</th>
        <th>${order.food}</th>
        <th>${order.totalCost}</th>
      </tr>`
      )
    }
    elem.append(ordersTable);
  },

  displayUserBookings(bookings) {
    let bookingTable = 
    `<tr>
      <th>Room Number</th>
      <th>Date</th>
      <th>     </th>
    </tr>`
    bookings.forEach(booking => 
      bookingTable += 
      `<tr class="booking-history" booking-id="${bookings[booking]}">
        <th>${booking.roomNumber}</th>
        <th>${booking.date}</th>
        <th><button>UNBOOK</button></th>
      </tr>`
    )
    $('.all-cust-display').append(bookingTable);
  }



}

export default domUpdates;