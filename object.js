let hotel = {
  name: "Quay",
  rooms: 40,
  booked: 25,
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

let restRoom = document.getElementById("rest");
restRoom.style.color='orange';
restRoom.textContent = hotel.checkAvailability() + ' rooms available';
