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

  getCurrentlyBooked(day) {
    let allBooks = this.bookings.filter(booking => {
      if (day) {
        return booking.date === day;
      } else {
        return booking.date === this.currentDay
      }
    });
    this.reservedRooms = allBooks.sort((a, b) => a.roomNumber - b.roomNumber)
    return this.reservedRooms
  }

  getCurrentlyAvailable(day) {
    let bookedNums = this.bookings.filter(booking => {
      if (day) {
        return booking.date === day
      } else {
        return booking.date === this.currentDay
      }
    }).map(booking => booking.roomNumber);
    this.vacantRooms = this.rooms.filter(room =>
      !bookedNums.includes(room.number))
    return this.vacantRooms;
  }

  getPercentRoomsAvailable() {
    return (50 - this.reservedRooms.length) * 2
  }

  getBookingRevToday() {
    let roomNumsBooked = this.getCurrentlyBooked().map(room => room.roomNumber)
    let filteredRooms = this.rooms.filter(room => {
      if (roomNumsBooked.includes(room.number)) {
        return room
      }
    }).reduce((totalRev, room) => {
      totalRev += room.costPerNight
      return totalRev
    }, 0)
    return filteredRooms.toFixed(2);
  }

  getRoom(roomNum) {
    return this.rooms.find(room => room.number === roomNum)
  }

  getPopularBookingDate() {
    let allBookings = this.bookings.reduce((dayBooks, order) => {
      if (!dayBooks[order.date]) {
        dayBooks[order.date] = 0;
      }
      dayBooks[order.date]++;
      return dayBooks;
    }, {})
    return Object.keys(allBookings).reduce((mostBooked, date) => {
      if (allBookings[date] > mostBooked.count) {
        mostBooked = {
          'date': date,
          'count': allBookings[date]
        }
      }
      return mostBooked;
    }, { date: '', count: 0 })
  }

  getUnpopularBookingDate() {
    let allBookings = this.bookings.reduce((dayBooks, order) => {
      if (!dayBooks[order.date]) {
        dayBooks[order.date] = 0;
      }
      dayBooks[order.date]++;
      return dayBooks;
    }, {})
    return Object.keys(allBookings).reduce((mostBooked, date) => {
      if (allBookings[date] < mostBooked.count) {
        mostBooked = {
          'date': date,
          'count': allBookings[date]
        }
      }
      return mostBooked;
    }, { date: '', count: 50 })
  }

  returnUserBookingsById(id) {
    return this.bookings.filter(booking => booking.userID === id)
  }


  

}


export default Bookings;