// This is the JavaScript entry file - your code begins here
import $ from 'jquery';
import 'jquery-ui-bundle';
import './css/base.scss';
import Hotel from '../src/Hotel.js';
import Bookings from '../src/Bookings.js';
import Customer from '../src/Customer.js';
import DOMupdates from './DOMupdates';

// <-- FETCH -->

let hotel;
Promise.all([
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then(response => response.json()),

  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(response => response.json()),

  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json()), 

  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices")
    .then(response => response.json()),
]).then(data => hotel = new Hotel(data[0], data[1], data[2], data[3]));
setTimeout(() => console.log(hotel), 100);
//! .then(data => hotel.init)
// <--  -->


$(document).ready(() => {
  $('#ui-tabs').tabs();
  $('#dboard-accordion').accordion();
  $('header').click(() => {
    $('header').toggle('puff')
  });
  // let date = '12/1/2019'
  // $('.date-today').text(`Hello, today is ${hotel.getCurrDay()}`)
  
});
