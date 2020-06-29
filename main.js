const lang = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, { weekday: "long" });
let monthName = date.toLocaleString(lang, { month: "long" });
let year = date.getFullYear();

document.getElementById("monthName").innerText = monthName;
document.getElementById("dayName").innerText = dayName;
document.getElementById("dayNumber").innerText = dayNumber;
document.getElementById("year").innerText = year;
