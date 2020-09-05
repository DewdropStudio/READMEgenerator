// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
     ## ${data.title}

     ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#contact)
    - [Contact](#contact)

     ## Description:
        ${data.description}

     ## Installation:
        ${data.installation}

      ## Usage:
        ${data.usage}

      ## License:
        ${data.license}
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

      ## Contributing:
        ${data.contributing}

      ## Tests:
        ${data.test}


     ## Questions:
        For questions, you can go to my GitHub page at the following Link:
    
        - [GitHub Profile](https://github.com/${data.username})

     ## Contact:
       For additional questions please reach out to my email ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  