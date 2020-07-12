// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
    # ${data.title}

    # Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Questions](#username)
    - [Contact](#email)

    ## Description:
        ${data.description}

    ## Installation:
        ${data.installation}

    ## Questions:
        For questions, you can go to my GitHub page at the following Link:
    
        - [GitHub Profile](https://github.com/${data.username})

    ## Contact
       For additional questions please reach out to my email ${data.email}
       
  `;
  }
  
  module.exports = generateMarkdown;
  