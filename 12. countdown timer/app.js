const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const temp = new Date();
const year = temp.getFullYear();
const month = temp.getMonth();
const date = temp.getDate();

const futureDate = new Date(year, month, date + 10, 9, 7, 00);
const hr = futureDate.getHours();
const min = futureDate.getMinutes();
const message = document.querySelector("article.text .message");
const timeBox = document.querySelectorAll(".countdown div h3");
const deadline = document.querySelector(".countdown");
message.innerHTML = `Giveaway Ends On ${date} ${months[month]} ${year} 0${hr}:0${min} pm`;

function setCountDown() {
  const today = new Date();
  const diff = futureDate.getTime() - today.getTime();
  // convert milliseconds to days will one day = 24 * 60 * 60 * 1000 ms
  const oneDay = 24 * 60 * 60 * 1000;

  // convert milliseconds to hrs will one hr = 60 * 60 * 1000ms
  const oneHr = 60 * 60 * 1000;

  // convert milliseconds to minutes will be one min = 60 * 1000ms
  const oneMin = 60 * 1000;

  // convert milliseconds to sec will be one sec =  1000ms
  const oneSec = 1000;
  const countDownday = Math.floor(diff / oneDay);
  const countDownHr = Math.floor((diff % oneDay) / oneHr);
  const countDownMin = Math.floor((diff % oneHr) / oneMin);
  const countDownSec = Math.floor((diff % oneMin) / oneSec);

  const countdowns = [countDownday, countDownHr, countDownMin, countDownSec];
  countdowns.forEach((countdown, index) => {
    timeBox[index].innerHTML = formatDate(countdown);
  });
  if (diff < 0) {
    clearInterval(count);
    deadline.innerHTML = `<h3 class="alert">This giveaway has expired</h3>`;
  }
}
function formatDate(num) {
  return num < 10 ? `0${num}` : num;
}
// setCountDown();
const count = setInterval(setCountDown, 1000);
setCountDown();
