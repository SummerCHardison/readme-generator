// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "none") {
    return '';
  }
// if no license, return an empty string
  const badges = {
    'MIT': '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    'Eclipse': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]',
    'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  
  return badges[license];
  // checks what license you picked and links to the badge icon for each license, gives alternate text if image fails and returns the badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "none") {
    return '';
  }

  const link = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Eclipse': 'https://opensource.org/licenses/EPL-1.0',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0'
  }
  
  return link[license];
  // gets and returns corresponding link to whatever license was picked
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "none") {
    return '';
  }

  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
  
## Badges
${renderLicenseBadge(license)}`
// Lets the reader know what license was picked, and renders the link. Also includes a section to display the badge.
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
  
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description

${data.description}

## Installation
  
${data.install}

## Usage

${data.use}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

If you have any questions, this is my GitHub profile and email for you to contact me.
  
GitHub: [https://github.com/${data.github}](https://github.com/${data.github})
Email: ${data.email}`;
// displays title and a table of contents that links to the corresponding sections, gives title of each section and displays information the user gave for each one. Links to github and email
}

module.exports = generateMarkdown;
