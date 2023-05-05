// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch(license) {
  case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
  case 'Creative Commons Attribution-NonCommercial 4.0 International':
    return'[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)';
    break;
  case 'GPLv3':
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    break;
  case 'Apache':
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
  case 'N/A':
    return '';
    break;
  default: return ''; break;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseDescr(license) {
  switch(license) {
    case 'MIT':
      return 'The MIT License';
      break;
    case 'Creative Commons Attribution-NonCommercial 4.0 International':
      return'Creative Commons Attribution-NonCommercial 4.0 International';
      break;
    case 'GPLv3':
      return 'GNU GPL v3';
      break;
    case 'Apache':
      return 'Apache 2.0 License';
      break;
    case 'N/A':
      return '';
      break;
    default: return ''; break;
  }
  
}
function renderTableOfContents(data) {
  let tableOfContents = data.tableOfContents;
  if(tableOfContents === true) {
    return `
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Deployed Application](#link)
    `
  }
  return ''
}
function renderLink(data) {
  if(data === '') {
    return ``
  }
  return `
## Link to Deployed Page
[Live Page](${data})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'N/A') {
    return ''
  }
  return `
## License`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
${renderTableOfContents(data)}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}
${renderLicenseSection(data.license)}
${renderLicenseDescr(data.license)}
${renderLink(data.link)}
`;
}

module.exports = generateMarkdown;
