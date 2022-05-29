const generateTeam = function (teamCards) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="navbar navbar-light" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center text-warning" id="navbar-content">My Team</span>
        </div>
    </header>
    <main>
        <div class="container" id="card-container">
            <div class="row">
                <!--team cards will be placed here dynamically-->
                ${teamCards}
            </div>
        </div>
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin="anonymous"></script>
</html>
`;
};

generateHTML = (info) => {
  cards = [];

  for (let i = 0; i < info.length; i++) {
    const employee = info[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerInfo = newManager(employee);
      pageArray.push(managerInfo);
    }

    if (role === "Engineer") {
      const engineerInfo = newEngineer(employee);
      pageArray.push(engineerInfo);
    }
    if (role === "Intern") {
      const internInfo = newIntern(employee);
      pageArray.push = internInfo;
    }
  }
  const teamCards = pageArray.join("");
  const createTeam = generateTeam(teamCards);
  return createTeam;
};

const newManager = function (manager) {
  return `
  <div class="col-4 mt-3">
  <div class="card">
      <div class="card-header">
          <h2 class="text-warning text-center">${manager.name}</h2>
          <h3 class="text-warning text-center"><img src="./images/mug.png" alt="coffee cup">Manager</h3>
      </div>
      <div class="card-body">
          <p class="employee-id text-center">Employee ID: ${manager.id}</p>
          <p class="email-address text-center">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office-number text-center">Office Number: ${manager.officeNumber}</p>
      </div>
  </div>
</div>
`;
}

module.exports = generateHTML;
