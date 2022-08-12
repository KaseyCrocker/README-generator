// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL 3.0') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD') {
    badge = '[![License: BSD](https://img.shields.io/badge/license-BSD-green.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return 'No License'
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/' 
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (license === 'GPL 3.0') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
  } else if (license === 'BSD') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/'
  } else {
    return '';
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license !== 'None') {
    licenseSection = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
    return licenseSection;
  } else {
    return 'No license selected';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)

* [Questions](#questions)

* [License](#license)

## Installation

To install necessary dependencies, run the following command:

What command should be run to install dependencies?

${data.installation}


## Tests

What command should be run to run tests?

${data.tests}

## Usage

What does the user need to know about using the repo?

${data.usage}


## Contributing

What does the user need to know about contributing to the repo?

${data.contributing}


## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).


## License

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
