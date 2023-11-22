// class
// functions
const clock = document.querySelector(".outer-clock-face");
const hr = document.querySelector(".hand.hour-hand");
const min = document.querySelector(".hand.min-hand");
const sec = document.querySelector(".hand.second-hand");

// function for calculating time
function setClockHands(time) {
  const { hours, minutes, seconds } = time;
  const hrrotation = 30 * hours + 0.5 * minutes;
  const minrotation = 6 * minutes;
  const secrotation = 6 * seconds;

  // add transition
  hr.style.transition = "transform 1s linear";
  min.style.transition = "transform 1s linear";
  sec.style.transition = "transform 1s linear";

  hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
  min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
  sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
}

// function for formatting time
function formatTime(hours, minutes, seconds) {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

// set time
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
setClockHands({ hours, minutes, seconds });

// start intervall for time
let intervalId = setInterval(() => {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  setClockHands({ hours, minutes, seconds });
}, 1000);

// Mouseover event
clock.addEventListener("mouseover", () => {
  // time on 10:10
  setClockHands({ hours: 10, minutes: 10, seconds: 0 });

  // stop intervall for time
  clearInterval(intervalId);

  // output
  console.log(`Clock set to: ${formatTime(10, 10, 0)}`);
});

// mouseout event
clock.addEventListener("mouseout", () => {
  // remove transition
  hr.style.transition = "";
  min.style.transition = "";
  sec.style.transition = "";

  // new intervall
  intervalId = setInterval(() => {
    currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    setClockHands({ hours, minutes, seconds });
  }, 1000);

  // output
  console.log(`Clock set back to: ${formatTime(hours, minutes, seconds)}`);
});
