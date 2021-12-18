const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dob = document.querySelectorAll(`.container div input`)[0];
let currdate = document.querySelectorAll(`.container div input`)[1];
let result = document.querySelector(`#result`);
let calculate = document.querySelector(`.container button`);
calculate.addEventListener("click", function () {
  let dobVal = dob.value.split("-");
  let currDateVal = currdate.value.split("-");
  if (dobVal.length != 3 || currDateVal.length != 3) {
    alert("Please Enter Valid Dates");
    return;
  }
  if (currDateVal[0] - dobVal[0] < 0) {
    alert("Please Enter Valid birth-year");
  }
  let year = currDateVal[0];
  if (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 100 == 0 && year % 400 == 0)
  ) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
  let years =
    currDateVal[1] - dobVal[1] >= 0
      ? currDateVal[0] - dobVal[0]
      : currDateVal[0] - dobVal[0] - 1;
  let month = (currDateVal[1] - dobVal[1] + 12) % 12;
  let day =
    (months[Number.parseInt(dobVal[1]) - 1] -
      Number.parseInt(dobVal[2]) +
      Number.parseInt(currDateVal[2])) %
    months[Number.parseInt(currDateVal[1] - 1)];
  result.innerHTML = `Year:${years} Month:${month} Day:${day}`;
});
