class Bookings {
  constructor(customers, bookings, roomService, rooms, currentDay) {
    this.customers = customers;
    this.bookings = bookings;
    this.roomService = roomService;
    this.rooms = rooms;
    this.currentDay = currentDay;
    this.vacantRooms;
  }

  getCurrentlyBooked() {
    let allBooks = this.bookings.filter(booking => {
      return booking.date === this.currentDay
    });
    return allBooks.sort((a, b) => a.roomNumber - b.roomNumber)
  }

  getCurrentlyAvailable() {
    let bookedNums = this.bookings.filter(booking => {
      return booking.date === this.currentDay
    }).map(booking => booking.roomNumber);
    this.vacantRooms = this.rooms.filter(room => 
      !bookedNums.includes(room.number))
    return this.vacantRooms;
  }

  appendBookingInfo() {

  }
}


export default Bookings;