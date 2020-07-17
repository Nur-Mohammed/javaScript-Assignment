function brickCalculator(numberOfFloor) {
  if (numberOfFloor < 0) {
    return "Floor number cannot be a negetive number";
  } else if (numberOfFloor <= 10) {
    return numberOfFloor * 15 * 1000;
  } else if (11 <= numberOfFloor <= 20) {
    return numberOfFloor * 12 * 1000;
  } else {
    return numberOfFloor * 10 * 1000;
  }
}
// const totalNumOfBrick = brickCalculator(5);
// console.log(totalNumOfBrick);
