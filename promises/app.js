function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => renderUsers(users));
}

function renderUsers(users) {
  let html = "";
  for (let user of users) {
    html += `<li class="list-user">
        <article class="user-container" id="${user.id}">
          <h2>${user.name}</h2>
          <p>${user.email}</p>
          <div class="company-info">
            <h3>${user.company.name}</h3>
            <p>${user.company.catchPhrase}</p>
          </div>
        </article>
      </li>`;
  }
  document.querySelector(".users-list").innerHTML = html;
}

fetchUsers();
