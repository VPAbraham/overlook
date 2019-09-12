class Hotel {
  constructor(userData, roomData, bookingData, roomServiceData) {
    this.users = userData;
    this.rooms = roomData;
    this.bookings = bookingData;
    this.roomService = roomServiceData;
    this.currentDay;
  }

  getCurrDay() {
    let date = new Date,
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    this.currentDay = [year, month, day].join('/')
    // this.currentDay = new Date(Date.now());
  }

  instCustomers() {
    this.forEach((cust) => {
      let bookings = this.retUserBookings(cust.id);
      
    })
  }

  retUserBookings(id) {
    return this.bookings.filter(booking => id === booking.userID)
  }


}

export default Hotel;