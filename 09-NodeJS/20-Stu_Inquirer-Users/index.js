const fs = require('fs');
const inquirer = require('inquirer');

inquirer
      .prompt([
            {
                  type: 'input',
                  message: 'What is your user name?',
                  name: 'username',
            },
            {
                  type: 'input',
                  message: 'What languages do you know?',
                  name: 'languages',
            },
            {
                  type: 'input',
                  message: 'What is your preferred method of communication?',
                  name: 'communication',
            },
      ])
      .then((data) =>
            fs.appendFile('log.txt', `${data.username}\n`, (err) =>
                  err ? console.error(err) : console.log('Commit logged!')
            )
      );
