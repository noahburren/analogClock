// Klassen
// Funktionalitäten
const hr = document.querySelector('.hand.hour-hand')
const min = document.querySelector('.hand.min-hand')
const sec = document.querySelector('.hand.second-hand')

// Periode wann es läuft
setInterval(() => {

    // Zeit holen
    let day = new Date()
    let hour = day.getHours()
    let minutes = day.getMinutes()
    let seconds = day.getSeconds()

    // tZeigerrotation
    let hrrotation = (30 * hour) + (0.5 * minutes);
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;

    hr.style.transform =
        `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =
        `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform =
        `translate(-50%,-85%) rotate(${secrotation}deg)`
});