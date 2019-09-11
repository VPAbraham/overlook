// This is the JavaScript entry file - your code begins here
import $ from 'jquery';
import 'jquery-ui-bundle';
import './css/base.scss';

// <-- FETCH -->

let users, rooms, bookings, roomServices;

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
  .then(data => data.json())
  .then(data => users = data.users)
  .catch(err => console.log('Unable to fetch data', err));

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
  .then(data => data.json())
  .then(data => rooms = data.rooms)
  .catch(err => console.log('Unable to fetch data', err));

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
  .then(data => data.json())
  .then(data => bookings = data.bookings)
  .catch(err => console.log('Unable to fetch data', err));

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices")
  .then(data => data.json())
  .then(data => roomServices = data.roomServices)
  .catch(err => console.log('Unable to fetch data', err));

  setTimeout(() => console.log(users, rooms, bookings, roomServices), 3000);

// <--  -->

$(document).ready(function() {
  $('#ui-tabs').tabs();
  // $('#select-menu').selectmenu();
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