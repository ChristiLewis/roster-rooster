const generateRoster = contactDataText => {
    if (!roosterText) {
        return 'Cockadoodledoo';
    }

    return `
    <section class="my-2" id="roster">
        <h2 class="text-white bg-secondary p-2 display-inline-block">Roster Rooster</h2>
        <p>${rosterText}</p>
    </section>  
    `;
};

//MULTILINE TEMPLATE LITERALS
module.exports = templateData => {
    //DESTRUCTURE DATA FROM TEMPLATE DATA VIA PROPERTY KEY NAMES
    const { employees, ... header } = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
      <img src="./assets/images/roster-rooster.jpg" alt="image of a rooster weather vane by kati-hoehl-unsplash"/>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
              header.github
          }">GitHub</a>
          </nav>
        </div>
      </header>
    `;
};