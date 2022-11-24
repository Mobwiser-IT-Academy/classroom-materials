function fetchHolidays() {
    fetch(`https://date.nager.at/api/v2/publicholidays/2022/PT`)
      .then((response) => response.json())
      .then((holidays) => renderHolidays(holidays));
  }
  
function renderHolidays(holidays) {
  let html = "";
  for (let holiday of holidays) {
    if(holiday.global) {
      html += `<li class="list-holiday">
          <article class="holiday-container ${Date.now() < new Date(holiday.date) ? 'color-green' : 'color-grey'}">
            <h2>${holiday.name}</h2>
            <p>${holiday.date}</p>
          </article>
       </li>`;
    }
  }
  document.querySelector(".holidays-list").innerHTML = html;
}
  
fetchHolidays();