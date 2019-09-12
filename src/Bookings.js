class Bookings {
  constructor(customers, bookings, roomService, rooms, currentDay) {
    this.customers = customers;
    this.bookings = bookings;
    this.roomService = roomService;
    this.rooms = rooms;
    this.currentDay = currentDay;
  }
};


export default Bookings;