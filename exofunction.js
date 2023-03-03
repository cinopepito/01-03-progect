class hotel {
  constructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
  }
  checkAvailability = function () {
    return this.rooms - this.booked;
  };
}
let georgeHotel = new hotel("George", 50, 20);
let cinoHotel = new hotel("cino", 120, 70);

let details1 = georgeHotel.name + ":";
details1 += georgeHotel.checkAvailability();
let el1 = document.getElementById("hotel1");
el1.textContent = details1 + ' rooms';

let details2 = cinoHotel.name + ":";
details2 += cinoHotel.checkAvailability();
let el2 = document.getElementById("hotel2");
el2.textContent = details2 + ' rooms';
