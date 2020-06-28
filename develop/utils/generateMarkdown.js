// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  ## Description 
  
  ${data.description}
  
  ## Table of Contents

  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [Credits](#-Credits)
  * [License](#-License)
  * [Badges](#-Badges)
  * [Authors](#-Authors)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  
  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Authors

  ${data.author}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions

  ${data.questions}`;
};

module.exports = generateMarkdown;
