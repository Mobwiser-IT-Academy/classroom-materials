class Holiday {
  constructor(date, name) {
    this.date = date;
    this.name = name;
  }

  getMonth() {
    //Date format YYYY-MM-DD
    return parseInt(this.date.split('-')[1]);
  }

  getDay() {
    //Date format YYYY-MM-DD
    return parseInt(this.date.split('-')[2]);
  }
}

class Month {
  constructor(id, name, days) {
    this.id = id;
    this.name = name;
    this.days = days;
  }

  getHoliday(day, holidays) {
    for (const holiday of holidays) {
      if(holiday.getDay() === day && holiday.getMonth() === this.id) {
        return holiday;
      }
    }
    return null;
  }
}

class Calendar {
  constructor() {
    this.months = [
      new Month(1,'January',31),
      new Month(2,'February',28),
      new Month(3,'March',31),
      new Month(4,'April',30),
      new Month(5,'May',31),
      new Month(6,'June',30),
      new Month(7,'July',31),
      new Month(8,'August',31),
      new Month(9,'September',30),
      new Month(10,'October',31),
      new Month(11,'November',30),
      new Month(12,'December',31),
    ];
  }
}

function fetchHolidays(year) {
    fetch(`https://date.nager.at/api/v2/publicholidays/${year}/PT`)
      .then((response) => response.json())
      .then((holidaysJSON) => renderHolidays(holidaysJSON));
  }
  
function renderHolidays(holidaysJSON) {
  const holidays = [];
  for (let holiday of holidaysJSON) {
    if(holiday.global) {
      holidays.push(new Holiday(holiday.date, holiday.name));
    }
  }
  
  renderCalendar(holidays);
}

function changeYear(sum){
  let year = document.querySelector("span.year").innerHTML;
  year = parseInt(year) + sum;
  document.querySelector("span.year").innerHTML = year;
  fetchHolidays(year);
}

function currentYear() {
	let year = new Date().getFullYear();
  document.querySelector("span.year").innerHTML = year;
  
  fetchHolidays(year);
}

function renderCalendar(holidays) {
  let calendar = new Calendar();
  let html = "";
  for (let month of calendar.months) {
    html += `<li class="list-month">
          <h2>${month.name}</h2>
          ${renderMonth(month, holidays)}
      </li>`;
    }
  document.querySelector(".calendar-list").innerHTML = html;
}

function renderMonth(month, holidays){
  let html = '';
  for(let i = 1; i <= month.days; i++) {
    let holiday = month.getHoliday(i ,holidays);
    html += `<span class="day ${holiday ? 'holiday tooltip' : ''}">
              ${i}
              ${holiday ? `<span class="tooltiptext">${holiday.name}</span>` : ''}
            </span>`
  }
  return `<p>${html}</p>`;
}