#! /usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');

const path = process.cwd();

const { questions, questionsTs } = require('./utils/questions.js');
const links = require('./utils/links.js')

inquirer.prompt(questions).then((answers) => {
    if (answers.framework === 'React') {
        inquirer.prompt(questionsTs).then((answersTs) => {
            if (answersTs.typescript === 'Yes') {
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green("📁 Created a folder for the project"))
                shell.exec(
                    `git clone ${links.get("React-TS")} ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`))
                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(
                    chalk.green('👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀')
                );
            } else {
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green("📁 Created a folder for the project"))
                shell.exec(
                    `git clone ${links.get("React")} ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`))
                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(
                    chalk.green('👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀')
                );
            }
        });
    } else if (answers.framework === 'NextJS') {
        inquirer.prompt(questionsTs).then((answersTs) => {
            if (answersTs.typescript === 'Yes') {
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green("📁 Created a folder for the project"))
                shell.exec(
                    `git clone ${links.get("NextJS-TS")} ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`))
                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(
                    chalk.green('👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀')
                );
            } else {
                shell.exec(`mkdir ${answers.projectName}`);
                console.log(chalk.green("📁 Created a folder for the project"))
                shell.exec(
                    `git clone ${links.get("NextJS")} ${answers.projectName}`
                );
                console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`))
                shell.cd(`${path}/${answers.projectName}`);
                shell.exec(`npm i`);
                console.log(
                    chalk.green('👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀')
                );
            }
        });
    } else if (answers.framework === 'Svelte') {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green("📁 Created a folder for the project"))
        shell.exec(
            `git clone ${links.get("Svelte")} ${answers.projectName}`
        );
        console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`))
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
            chalk.green('👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀')
        );
    } else {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green("📁 Created a folder for the project"))
        shell.exec(
            `git clone ${links.get("Vue")} ${answers.projectName}`
        );
        console.log(chalk.green(`🖨️  Cloned started files into ${answers.projectName}`))
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
            chalk.green('👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀')
        );
    }
});