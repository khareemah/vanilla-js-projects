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

// Giveaway expiration

// set 10daysto expiry when the application opens
const temp = new Date();
const tempYear = temp.getFullYear();
const tempMonth = temp.getMonth();
const tempDate = temp.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDate + 10, 11, 30);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hr = futureDate.getHours();
const min = futureDate.getMinutes();
const sec = futureDate.getSeconds();

const message = document.querySelector("article.text .message");
message.innerHTML = `Giveaway ends on ${date} ${month}, ${year} ${hr}:${min}am`;

// count down timer

const timeBox = document.querySelectorAll(".countdown div h3");
const timeExpired = document.querySelector(".countdown");
function getRemainingTime() {
  const today = new Date();
  const diff = futureDate - today;

  // one day in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  // one hour to milliseconds
  const oneHour = 60 * 60 * 1000;
  // one minute to milliseconds
  const oneMin = 60 * 1000;

  const daysLeft = Math.floor(diff / oneDay);
  const hoursLeft = Math.floor((diff % oneDay) / oneHour);
  const minLeft = Math.floor((diff % oneHour) / oneMin);
  const secLeft = Math.floor((diff % oneMin) / 1000);

  function formatTime(num) {
    if (num < 10) return `0${num}`;
    return num;
  }
  const deadline = [daysLeft, hoursLeft, minLeft, secLeft];
  timeBox.forEach((box, index) => {
    box.innerHTML = formatTime(deadline[index]);
  });
  if (diff < 0) {
    clearInterval(countdown);
    timeExpired.innerHTML = `<h3 class="alert">This giveaway has expired</h3>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
