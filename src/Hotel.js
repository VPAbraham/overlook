import Customer from "./Customer";

class Hotel {
  constructor(userData, roomData, bookingData, roomServiceData) {
    this.currentDay;
    this.users = userData;
    this.rooms = roomData;
    this.bookings = bookingData;
    this.roomService = roomServiceData;
    this.customers = [];
  }

  

  getCurrDay() {
    let date = new Date,
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    this.currentDay = [year, month, day].join('/')
    // this.currentDay = new Date(Date.now());
  }

  instCustomers() {
    this.forEach((cust) => {
      let bookings = this.getCustomerBookings(cust.id);
      let roomServices = this.getCustomerRoomService(cust.id);
      let rooms = this.retUserRooms(user.id);
      let menu = this.menu;
      let customer = new Customer(user.id, user.name, bookings, roomServices, rooms, menu, this.currentDay);
      this.customers.push(customer);
    });
  }
  
  retCustomerName(name) {
    return this.instCustomers.find(customer => customer.name === name);
  }

  getCustomerBookings(id) {
    return this.bookings.filter(booking => 
      id === booking.userID)
  }







  hotelPrepHandler() {
  }

}

export default Hotel;