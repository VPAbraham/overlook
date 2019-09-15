class Customer {
  constructor(id, name, bookings, roomServices, rooms, menu, currentDate) {
    this.id = id;
    this.name = name;
    this.menu = menu;
    this.bookings = bookings || [];
    this.roomServices = roomServices || [];
    this.rooms = rooms || [];
    this.currentDate = currentDate;
  }
}

export default Customer;