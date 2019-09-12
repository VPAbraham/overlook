class Customer {
  constructor(id, name, bookings, roomServices, rooms) {
    this.id = id;
    this.name = name;
    this.bookings = bookings || [];
    this.roomService = roomService || [];
    this.rooms = rooms || [];
  }
}

export default Customer;