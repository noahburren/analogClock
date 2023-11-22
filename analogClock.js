// Klassen
// Funktionalitäten
const clock = document.querySelector(".outer-clock-face");
const hr = document.querySelector(".hand.hour-hand");
const min = document.querySelector(".hand.min-hand");
const sec = document.querySelector(".hand.second-hand");

// Funktion zum Berechnen der Rotation basierend auf der Uhrzeit
function setClockHands(time) {
  const { hours, minutes, seconds } = time;
  const hrrotation = 30 * hours + 0.5 * minutes;
  const minrotation = 6 * minutes;
  const secrotation = 6 * seconds;

  // Füge die Transition-Eigenschaft hinzu
  hr.style.transition = "transform 1s ease";
  min.style.transition = "transform 1s ease";
  sec.style.transition = "transform 1s ease";

  hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
  min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
  sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
}

// Funktion zum Formatieren der Uhrzeit
function formatTime(hours, minutes, seconds) {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

// Standardzeit setzen (aktuelle Zeit)
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
setClockHands({ hours, minutes, seconds });

// Mouseover Event für die Uhr
let intervalId;

clock.addEventListener("mouseover", () => {
  // Uhrzeiger auf 14:50 Uhr setzen
  setClockHands({ hours: 14, minutes: 50, seconds: 0 });

  // Intervall für aktuelle Uhrzeit stoppen
  clearInterval(intervalId);

  // Konsolenausgabe (optional)
  console.log(`Clock set to: ${formatTime(14, 50, 0)}`);
});

// Mouseout Event für die Uhr (optional)
clock.addEventListener("mouseout", () => {
  // Entferne die Transition-Eigenschaft
  hr.style.transition = "";
  min.style.transition = "";
  sec.style.transition = "";

  // Neues Intervall für aktuelle Uhrzeit starten
  intervalId = setInterval(() => {
    currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    setClockHands({ hours, minutes, seconds });
  }, 1000);

  // Konsolenausgabe (optional)
  console.log(`Clock set back to: ${formatTime(hours, minutes, seconds)}`);
});
