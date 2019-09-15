import Customer from './Customer.js';
import Bookings from './Bookings.js'
import domUpdates from './domUpdates.js';

class Hotel {
  constructor(userData, roomData, bookingData, roomServiceData) {
    this.currentDay;
    this.users = userData.users;
    this.rooms = roomData.rooms;
    this.bookings = bookingData.bookings;
    this.menu;
    this.roomServices = roomServiceData.roomServices;
    this.customers = [];
    this.bookingDb;
    this.hotelPrepHandler()
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
      let customer = new Customer(cust.id, cust.name, bookings, roomServices, rooms, this.menu, this.currentDay);
      this.customers.push(customer);
    });
  }

  instBookings() {
    this.bookingDb = new Bookings(this.customers, this.bookings, this.roomServices, this.rooms, this.currentDay)
  }
  createMenu() {
    this.menu = this.roomServices.reduce((foodSelection, order) => {
      if (!foodSelection.includes(order.food)) {
        foodSelection.push({food: order.food, totalCost: order.totalCost})    
      }
      return foodSelection
    }, [])
  }

  appendBasicInfo() {
    domUpdates.displayDate(this.currentDay)
    domUpdates.displayReservedRooms(this.bookingDb.getCurrentlyBooked())
  }

  hotelPrepHandler() {
    this.getCurrDay();
    this.createMenu()
    this.instCustomers();
    this.instBookings();
    // this.appendBasicInfo(); 
  }



}

export default Hotel;