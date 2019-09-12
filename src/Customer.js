class Customer {
  constructor(id, name, bookings, roomServices, rooms) {
    this.id = id;
    this.name = name;
    this.bookings = bookings || [];
    this.roomServices = roomServices || [];
    this.rooms = rooms || [];
  }
}

export default Customer;