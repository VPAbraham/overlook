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
]).then(data => hotel = new Hotel(data[0], data[1], data[2], data[3])).then(data => console.log(hotel))
.then(data => console.log(hotel.currentDay))
.then(() => console.log(hotel.menu));
// <--  -->


$(document).ready(() => {
  $('#ui-tabs').tabs( {active: 0});
  $('#dboard-accordion').accordion();
  // $('header').click(() => {
  //   $('header').toggle('puff')
  // });
  // let date = '12/1/2019'
  // $('.date-today').text(`Hello, today is ${hotel.getCurrDay()}`)
  
});
