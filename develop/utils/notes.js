.prompt(questions).then(response => {
    //creating readme file
    const filename = 'README.md'
    // function to add title write README file
    fs.appendFileSync(filename, '# ' + response.title + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //function to add description to README.md 
    fs.appendFileSync(filename, '## Description' + '\n' + response.description + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //table of contents
    fs.appendFileSync(filename, ('## Table of Contents:' + '\n' + ' - ' + response.tableOfContents.split(', ').join('\n' + ' - ')) + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //installation guide
    fs.appendFileSync(filename, '## Installation' + '\n' + response.install + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //use-case
    fs.appendFileSync(filename, '## Use Case' + '\n' + response.usage + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //license
    fs.appendFileSync(filename, '## License' + '\n' + response.license + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //authors & contributors
    fs.appendFileSync(filename, '## Authors & Contributors' + '\n' + response.author + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //contribution
    fs.appendFileSync(filename, '## Contribution rules' + '\n' + response.contribute + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //tests
    fs.appendFileSync(filename, '## Tests' + '\n' + response.test + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });

    //questions
    fs.appendFileSync(filename, '## Questions' + '\n' + response.questions + '\n', function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });


///function to get license
    function getLicenseBadge(licenseName) {
        switch (licenseName) {
            case 'Apache License 2.0': return `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache-yellow.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
            case 'GNU General Public License v3.0': return `[![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GNU-General-Public-License-v3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
            case 'MIT license': return `[![License: MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            case 'BSD 2-Clause "Simplified" License': return `[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD-2-Clause-yellow.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
            case 'Boost Software License 1.0': return `[![Boost Software License 1.0](https://img.shields.io/badge/License-Boost-Software-Licence-yellow.svg)](https://www.boost.org/users/license.html)`;
            case 'Creative Commons Zero v1.0 Universal': return `[![Creative Commons Zero v1.0 Universal](https://img.shields.io/badge/License-CC0-1.0-Universal-yellow.svg)](https://creativecommons.org/publicdomain/zero/1.0/)`; 
            case 'Eclipse Public License 2.0': return `[![Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse-Public-License-2.0-yellow.svg)](https://www.eclipse.org/legal/epl-2.0/)`;
            case 'GNU Affero General Public License v3.0': return `[![GNU Affero General Public License v3.0](https://img.shields.io/badge/License-GNU-AGPL-v3-yellow.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
            case 'GNU General Public License v2.0': return `[![GNU General Public License v2.0](https://img.shields.io/badge/License-GPLv2-yellow.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            case 'GNU Lesser General Public License v2.1': return `[![GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-LGPLv2.1-yellow.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`;
            case 'Mozzila Public License 2.0': return `[![Mozzila Public License 2.0](https://img.shields.io/badge/License-Mozzila-Public-License-2.0-yellow.svg)](https://www.mozilla.org/en-US/MPL/)`;
            case 'The Unilicense': return `[![Mozzila Public License 2.0](https://img.shields.io/badge/License-The-Unilicense-yellow.svg)](https://unlicense.org/)`;
        default: return `Something went wrong! did you pick a license?`;
        };
    };