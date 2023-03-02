let now = new Date();
let hour = now.getHours();
console.log(hour);
let date = now.getDate();
console.log(date);
let month = now.getMonth();
console.log(month);
let year = now.getFullYear();
console.log(year);
let greeting;
if (hour < 0 && hour <= 6) {
  greeting = " Good Night";
} else if (hour > 6 && hour <= 12) {
  greeting = " Good morning";
} else if (hour > 12 && hour <= 18) {
  greeting = " Good Afternoon";
} else if (hour > 18 && hour <= 24) {
  greeting = " Good night";
} else {
  greeting = "welcome";
}
document.write(
  "<h3>" + greeting + " today is " + date + "/" + month + "/" + year + "</h3>"
);
