

function buildProfile(user) {
    console.log(user.name);
    let profile = `
      <ul class="list-group">
      <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">Email: ${user.email}</li>
      </ul>
    `;
    console.log("i am coming");

    document.querySelector('#profile').innerHTML = profile;
}
