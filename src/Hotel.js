class Hotel {
  constructor(userData, roomData, bookingData, roomServiceData) {
    this.users = userData;
    this.rooms = roomData;
    this.bookings = bookingData;
    this.roomService = roomServiceData;
    this.currentDay;
  }

  getCurrDay() {
    this.currentDay = new Date(Date.now());
  };
}

export default Hotel;