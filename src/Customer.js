class Customer {
  constructor(id, name, bookings, roomServices, rooms, menu, currentDate) {
    this.id = id;
    this.name = name;
    this.bookings = bookings || [];
    this.roomServices = roomServices || [];
    this.rooms = rooms || [];
    this.menu = menu;
    this.currentDate = currentDate;
  }

  getCurrentBooking() {
    return this.bookings.find(booking => booking.date === this.currentDate)
  }

  getRoomServicesByDate(date) {
    return this.roomServices.filter(service => service.date === date)
  }  

}

export default Customer;