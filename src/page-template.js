const generateTeam = (team) => {
  const generateIntern = (intern) => {
    return `
        <div class= 'card'>
        <p>${intern.getName()}</p>
        <p>${intern.getEmail()}</p>
        <p>${intern.getId()}</p>
        <p>${intern.getSchool()}</p>
        </div>`;
  };


const generateEngineer = (engineer) => {
  return `
    <div class= 'card'>
    <p>${engineer.getName()}</p>
    <p>${engineer.getEmail()}</p>
    <p>${engineer.getId()}</p>
    <p>${engineer.getGithub()}</p>
    </div>`;
};

const generateManager = (manager) => {
  return `
    <div class= 'card'>
    <p>${manager.getName()}</p>
    <p>${manager.getEmail()}</p>
    <p>${manager.getId()}</p>
    <p>${manager.getOfficeNumber()}</p>
    </div>`;
};

const html = [];
html.push(
  team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
);
html.push(
  team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
);
html.push(
  team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
);
return html.join("");
};
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
<h1 class="text-center">My Team</h1>
</div>
</div>
</div>
<div class="row">
<div class="team-area col-12 d-flex justify-content-center">
${generateTeam(team)}
</div>
</div>
</body>
</html>`;
};
