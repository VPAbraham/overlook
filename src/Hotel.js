Class Hotel {
  constructor(userData, roomData, bookingData, roomServiceData) {
    this.users = userData;
    this.rooms = roomData;
    this.bookings = bookingData;
    this.roomService = roomServiceData;
    this.currentDay;
  }

  getCurrDay() {
    currentDay = new Date(Date.now());
  }
};

export default Hotel;