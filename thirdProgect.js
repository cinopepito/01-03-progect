function getSize(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  let size = [area, volume];
  return size;
}

let areaOne = getSize(3, 2, 3)[0];
console.log(areaOne)
let volumeOne = getSize(3, 2, 3)[1];
console.log(volumeOne)
