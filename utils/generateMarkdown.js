// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case 'GNU General Public License v3.0':
      return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'MIT License':
      return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]';
    case 'BSD 3-Clause "New" License':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]';
    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)]';
    case 'GNU Affero General Public License v3.0':
      return '[![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]';
    case 'GNU General Public License v2.0':
      return '[![License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]';
    case 'GNU Lesser General Public License v2.1':
      return '[![License](https://img.shields.io/badge/License-LGPL%20v2-blue.svg)]';
    case 'Mozilla Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
    case 'The Unlicense':
      return '[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
    case 'None':
      return '';
    default:
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause "Simplified" License':
      return '(https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause "New" License':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    case 'Creative Commons Zero v1.0 Universal':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 2.0':
      return '(https://opensource.org/licenses/EPL-2.0)';
    case 'GNU Affero General Public License v3.0':
      return '(https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU General Public License v2.0':
      return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU Lesser General Public License v2.1':
      return '(https://www.gnu.org/licenses/lgpl-2.1)';
    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '(http://unlicense.org/)';
    case 'None':
      return '';
    default:
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the [${license}]`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  ## DESCRIPTION

  ${data.description}

  ## TABLE OF CONTENTS

  - [DESCRIPTION](#description)
  - [INSTALLATION](#installation)
  - [USAGE](#usage)
  - [LICENSE](#license)
  - [CONTRIBUTING](#contributing)
  - [TESTS](#tests)
  - [QUESTIONS](#questions)

  ## INSTALLATION

  ${data.installation} 

  ## USAGE

  ${data.usage}

  ## LICENSE

  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}

  ## CONTRIBUTING

  ${data.contributing}

  ## TESTS

  ${data.tests}

  ## QUESTIONS

  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email}

`;
}

module.exports = generateMarkdown;
