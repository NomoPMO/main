let today = new Date();
let calendar = document.getElementById("calendar");

let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();

let currentYear = year;
let currentMonth = month;

const monthNames = [
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
  "December",
];

function buildCalendar(year, month) {
  calendar.innerHTML = "";

  let firstDay = new Date(year, month, 1);
  let firstWeekday = firstDay.getDay();

  let daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstWeekday; i++) {
    let blankDay = document.createElement("div");
    blankDay.classList.add("blank-day");
    calendar.appendChild(blankDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    let dayBox = document.createElement("div");
    dayBox.classList.add("day-box");
    dayBox.textContent = i;

    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      i === today.getDate()
    ) {
      dayBox.classList.add("today-highlight");
    }

    calendar.appendChild(dayBox);
  }

  document.getElementById(
    "monthLabel"
  ).textContent = `${monthNames[month]} ${year}`;
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  buildCalendar(currentYear, currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  buildCalendar(currentYear, currentMonth);
});

buildCalendar(currentYear, currentMonth);
