class Customer {
  constructor(id, name, bookings, roomServices, rooms, currentDate) {
    this.id = id;
    this.name = name;
    this.bookings = bookings || [];
    this.roomServices = roomServices || [];
    this.rooms = rooms || [];
    this.currentDate = currentDate;
  }
}

export default Customer;