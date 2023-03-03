class hotel {
  constructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
  }
  checkavailability = function () {
    return this.rooms - this.booked;
  };
}
let quayHotel = new hotel("Quay", 40, 25);
let parkHotel = new hotel("Park", 120, 77);

let details1 = quayHotel.name + " :";
details1 += quayHotel.checkavailability();

let elhotel1 = document.getElementById("hotel1");
elhotel1.textContent = details1;

let details2 = parkHotel.name + " :";
details2 += parkHotel.checkavailability();

let elhotel2 = document.getElementById("hotel2");
elhotel2.textContent = details2;
