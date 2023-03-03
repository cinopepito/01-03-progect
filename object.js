let hotel = {
    name:'Quay',
    rooms:40,
    booked:25,
    checkAvailability:function(){
        return this.rooms-this.booked;
    }
}
let holtelName = hotel.name;
console.log(holtelName)