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

$(document).ready(function() {
  $('#ui-tabs').tabs();
})

// let $tabButtons = $('.tab-container, .tab-btn-container .main-btn .orders-btn .rooms-btn .customer-btn');
// let $tabPanels = $('.tab-container, .tab-panel')

// function showPanel(panelIndex, colorCode) {
//   $tabButtons.forEach((node) => {
//     node.style.backgroundColor='';
//     node.style.color=''
//   });
//   $tabButtons[panelIndex].style.backgroundColor=colorCode;
//   $tabButtons[panelIndex].style.color = 'white';
//   $tabButtons.forEach((node) => {
//     node.style.display='none';
//   });
//   $tabPanels[panelIndex].style.display = 'block';
//   $tabPanels[panelIndex].style.backgroundColor = colorCode;
// } 
// function meh() {
//   console.log('x');
// }

// $('.main-btn').click(meh());
// $('.orders-btn').click(console.log('y'));
// $('.rooms-btn').click(showPanel(2, 'pink'));
// $('.customer-btn').click(showPanel(3, 'purple'));