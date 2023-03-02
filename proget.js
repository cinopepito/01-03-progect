function show() {
  let value = document.getElementById("box").value;
  console.log(value);
  let numberOfLetter = value.length;
  let costPerLetter = 5;
  let totalValue = costPerLetter * numberOfLetter;
  let result = document.getElementById("result");
  result.innerHTML = "$" + totalValue;
  result.style.color = "white";
  result.style.width = "20px";
  result.style.backgroundColor = "red";
  result.style.padding = "5px";
  if (value) {
    alert(value + "," + "your plaque cost $" + totalValue);
  } else {
    alert("enter value");
  }
}
