setInterval(() => {
    let date = new Date();
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");
    let noon = document.querySelector(".noon");
    hours.textContent = padZero(date.getHours());
    minutes.textContent = padZero(date.getMinutes());
    seconds.textContent = padZero(date.getSeconds());
    if (date.getHours() > 12) {
        noon.textContent = "PM";
    } else { noon.textContent = "AM"; }

}, 500);

function padZero(num) {
    return num < 10 ? '0' + num : num;
}