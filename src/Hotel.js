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
    this.selectedCustomer = undefined;
    this.selectedRoom;
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
    name = name.toLowerCase()
    return this.customers.find(customer => customer.name.toLowerCase() === name);
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

  getRoomServicesByDay(day) {
    if (day) {
      return this.roomServices.filter(service => service.date === day)
    } else {
      return this.roomServices.filter(service => service.date === this.currentDay)
    }
  }

  getRoomServiceRevToday() {
    let todayService = this.roomServices.filter(service => {
      return service.date === this.currentDay
    });
    return todayService.reduce((totalRev, service) => {
      totalRev += service.totalCost
      return totalRev
    }, 0)
  }

  addCustomer(name) {
    let customerId = this.customers.length + 1;
    let newCustomer = new Customer(customerId, name, [], [], [], this.menu, this.currentDate);
    this.customers.push(newCustomer);
    return this.customers[customerId - 1]
  }

  bookRoom(roomNumber, date, customer) {

    this.bookingDb
  }

  hotelPrepHandler() {
    this.getCurrDay();
    this.createMenu()
    this.instCustomers();
    this.instBookings();
  }

  selectRoomByNum(num) {
    return this.rooms
  }


}

export default Hotel;