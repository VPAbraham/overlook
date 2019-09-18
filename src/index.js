// This is the JavaScript entry file - your code begins here
import $ from 'jquery';
import 'jquery-ui-bundle';
import './css/base.scss';
import Hotel from '../src/Hotel.js';
import Bookings from '../src/Bookings.js';
import Customer from '../src/Customer.js';
import domUpdates from './domUpdates';

// <-- FETCH -->

let hotel;
Promise.all([
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(resp => resp.json()),

  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(resp => resp.json()),

  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(resp => resp.json()), 

  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices")
    .then(resp => resp.json()),
]).then(data => hotel = new Hotel(data[0], data[1], data[2], data[3]))
  .catch(error => console.log(`Promise error: ${error}`))


$(document).ready(() => {
  $('#ui-tabs').tabs( {active: 0});
  $('#dboard-accordion').accordion();
  $('#datepicker').datepicker({dateFormat: 'yy/mm/dd'});
  $('#datepicker-2').datepicker({ dateFormat: 'yy/mm/dd' });
  $('.book-room-button').attr("disabled", true);

  function openHotel() {
    console.log(hotel);
    console.log(hotel.customers);
    domUpdates.displayDate(hotel.currentDay)
    domUpdates.displayReservedRooms(hotel.bookingDb.getCurrentlyBooked())
    domUpdates.displayAvailableRooms(hotel.bookingDb.getCurrentlyAvailable())
    domUpdates.displayPercentRoomsAvailable(hotel.bookingDb.getPercentRoomsAvailable())
    domUpdates.displayTodayOrders(hotel.getRoomServicesByDay())
    domUpdates.displayTotalBookingRev(hotel.bookingDb.getBookingRevToday())
    domUpdates.displayTotalRoomServiceRev(hotel.getRoomServiceRevToday())
    domUpdates.displayMostBooked(hotel.bookingDb.getPopularBookingDate(), hotel.bookingDb.getUnpopularBookingDate())
  }

  $('.start-hotel-button').on('click', () => {
    openHotel()
    $('.modal-start').hide();
    $('.modal-backdrop').hide();
  }) 

  function searchCustomers() {
    let searchInput = $('.cust-search-input').val().toLowerCase();
    let filteredUsers = hotel.customers.filter(customer => {
      return customer.name.toLowerCase().includes(searchInput);
    });
    if( searchInput.length === 0) {
      filteredUsers = [];
      $('.customer-search-display').empty();
    }
    domUpdates.displaySearch(filteredUsers)
  }

  $('.cust-search-input').on('keyup', searchCustomers);

  $('.clear-customer-button').on('click', () => {
    hotel.selectedCustomer = undefined;
    $('.customer-selected-display').text('');
    $('.cust-search-input').val('');
    $('.customer-search-display').empty();
    $('.book-room-button').attr("disabled", true);
  });

  function arrangeForSelectedCustomer() {
  }

  $('.customer-search-display').on('click', '.retr-name', (e) => {
    $('.book-room-button').attr("disabled", false);
    let selectedUser = $(e.target).attr('data-id')
    hotel.selectedCustomer = hotel.getCustomerByName(selectedUser);
    let currentBooking = hotel.selectedCustomer.getCurrentBooking();
    if (currentBooking) {
      hotel.selectedRoom = hotel.bookingDb.getRoom(currentBooking.roomNumber)
    }
    $('.customer-selected-display').text(`Currently selected: ${selectedUser}`)
    console.log(hotel.selectedCustomer)
  });



  $('.cust-add-button').on('click', () => {
    if ($('.cust-add-input').val() !== '') {
      let newName = $('.cust-add-input').val();
      $('.cust-add-input').val('');
      hotel.selectedCustomer = hotel.addCustomer(newName);
      $('.new-cust-display').text(`You have added: ${newName}`)
      $('.customer-selected-display').text(`Currently selected: ${newName}`)
    }
  })

  $('.date-room-button').on('click', () => {
    let date = $('#datepicker').val();
    console.log(date)
    let rooms = hotel.bookingDb.getCurrentlyAvailable(date);
    domUpdates.displayRoomsForDateSel(rooms);
  })

  $('.av-room-search-disp').on('click', '.room-selector', (e) => {
    if (hotel.selectedCustomer) {
      let roomNum = $(e.target).parent().attr('room-id');
      console.log(roomNum)
      console.log(hotel.selectRoomByNum(roomNum))
      console.log(hotel)
      hotel.selectedRoom = hotel.selectRoomByNum(roomNum)
      console.log(hotel.selectedRoom)
    }
  }),

  $('.search-orders-button').on('click', () => {
    if ($('.order-datepicker').val() !== '') {
      let selectedDate = $('.order-datepicker').val();
      domUpdates.displayTodayOrders(hotel.getRoomServicesByDay(selectedDate))
      console.log(hotel.getRoomServicesByDay(selectedDate))
    } 
  })



});

