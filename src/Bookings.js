class Bookings {
  constructor(customers, bookings, roomService, rooms, currentDay) {
    this.customers = customers;
    this.bookings = bookings;
    this.roomService = roomService;
    this.rooms = rooms;
    this.currentDay = currentDay;
    this.vacantRooms;
    this.reservedRooms;
  }

  getCurrentlyBooked() {
    let allBooks = this.bookings.filter(booking => {
      return booking.date === this.currentDay
    });
    this.reservedRooms = allBooks.sort((a, b) => a.roomNumber - b.roomNumber)
    return this.reservedRooms
  }

  getCurrentlyAvailable() {
    let bookedNums = this.bookings.filter(booking => {
      return booking.date === this.currentDay
    }).map(booking => booking.roomNumber);
    this.vacantRooms = this.rooms.filter(room => 
      !bookedNums.includes(room.number))
    return this.vacantRooms;
  }

  getPercentRoomsAvailable() {
    return (50 - this.reservedRooms.length) * 2
  }

}


export default Bookings;