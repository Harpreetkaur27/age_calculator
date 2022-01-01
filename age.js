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
 
 dobVal = dobVal.map((ele) => Number.parseInt(ele));
 currDateVal = currDateVal.map((ele) => Number.parseInt(ele));
  
if (
  dobVal[0] > currDateVal[0] ||
  (dobVal[0] == currDateVal[0] && dobVal[1] > currDateVal[1]) ||
  (dobVal[0] == currDateVal[0] &&
    dobVal[1] == currDateVal[1] &&
    dobVal[2] > currDateVal[2])
) {
  setTimeout(() => {
    alert("Please enter valid birth date.");
  }, 1);
  return;
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
    currDateVal[1] < dobVal[1] || (dobVal[1] == currDateVal[1] && currDateVal[2] < dobVal[2])
    ? currDateVal[0] - dobVal[0] - 1
    : currDateVal[0] - dobVal[0];
  let month = dobVal[2] > currDateVal[2]
    ? (12 - dobVal[1] + currDateVal[1] + 11) % 12
    : (12 - dobVal[1] + currDateVal[1]) % 12;
  let day =
    (months[dobVal[1] - 1] - dobVal[2] + currDateVal[2]) % months[dobVal[1] - 1];
  result.innerHTML = `Year:${years} Month:${month} Day:${day}`;
});
