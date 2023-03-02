function addItem() {
  let newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("box").value;
  newItem.onclick = removeItem;
  document.getElementById("list").appendChild(newItem);
  saveList();
}
function removeItem() {
  document.getElementById("list").removeChild(this);
  saveList();
}
function saveList() {
  localStorage.list = document.getElementById("list").innerHTML;
}
function loadlist() {
  document.getElementById("list").innerHTML = localStorage.list;
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
  }
}
if (localStorage.list) {
  loadlist();
}
