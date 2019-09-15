class Bookings {
  constructor(customers, bookings, roomService, rooms, currentDay) {
    this.customers = customers;
    this.bookings = bookings;
    this.roomService = roomService;
    this.rooms = rooms;
    this.currentDay = currentDay;
    this.reservedRooms;
  }

  getCurrentlyBooked() {
    let allBooks = this.bookings.filter(booking => {
      return booking.date === this.currentDay
    });
    return allBooks.sort((a, b) => a.roomNumber - b.roomNumber)
  }

  appendBookingInfo() {

  }
}


export default Bookings;