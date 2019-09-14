import Customer from './Customer';
import Bookings from './Bookings'
import domUpdates from './domUpdates.js'

class Hotel {
  constructor(userData, roomData, bookingData, roomServiceData) {
    this.currentDay;
    this.users = userData.users;
    this.rooms = roomData.rooms;
    this.bookings = bookingData.bookings;
    this.roomServices = roomServiceData.roomServices;
    this.customers = [];
    this.instCustomers();
    this.instBookings();
    // this.domUpdates.displayDate(this.currentDay);
  }
  

  getCurrDay() {
    let date = new Date,
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    month.length < 2 ? month = '0' + month : null;
    day.length < 2 ? day = '0' + day : null;
    this.currentDay = [year, month, day].join('/')
  }

  
  getCustomerByName(name) {
    return this.customers.find(customer => customer.name === name);
  }
  
  getCustomerById(id) {
    return this.customers.find(customer => customer.id === id);
  }
  
  getCustomerBookings(id) {
    return this.bookings.filter(booking => 
      id === booking.userID)
  }
    
  getCustomerRoomServices(id) {
    return this.roomServices.filter(roomService =>
      roomService.userID === id)
  }
      
  getCustomerRooms(id) {
    let custBookings = this.getCustomerBookings(id);
    return this.rooms.filter(room => {
      let roomNumbers = custBookings.map(booking => booking.roomNumber);
      return roomNumbers.includes(room.number)
    })
  }
      
  instCustomers() {
    this.users.forEach((cust) => {
      let bookings = this.getCustomerBookings(cust.id);
      let roomServices = this.getCustomerRoomServices(cust.id);
      let rooms = this.getCustomerRooms(cust.id);
      let menu = this.menu;
      let customer = new Customer(cust.id, cust.name, bookings, roomServices, rooms, menu, this.currentDay);
      this.customers.push(customer);
    });
  }

  instBookings() {
    this.bookings = new Bookings(this.customers, this.bookings, this.roomServices, this.rooms, this.currentDay)
  };





  hotelPrepHandler() {
    instCustomers(); 
  }

}

export default Hotel;