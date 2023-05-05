# Node README Generator Challenge-09

## Description
For this assignment, I was tasked with creating a README generator so that developers could quickly generate a professional README for their new project. To do this, I used node.js, created an array of questions, and used inquirer to prompt users with those questions in the commandline to guide the creation of a README file with their input.

Once I had a way of collecting the user input necessary to generate my README template, I then had to format that data into markdown and write that to a file for the user to use. I had fun using if statements to determine if entire sections of the README were included or not based on user input, such as with licensing information and the table of contents. For the rest of the information, I simply wrote up the markdown and included data with template literals. I could then use the generateMarkdown() functionality with fs's writeFile to generate README files through the commandline. I used it partially for this project itself, editing it after to better suit my needs.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Screenshots](#screenshots)
- [Video Walkthrough](#video)
    

## Installation
- Clone github repository
- Type npm i or npm install in terminal to install necessary dependencies

## Usage
- To use this generator, first follow the installation steps. 
- To begin, run node index.js or npm run start. 
- Answer the questions, filling in information relevant to your README file. 
- Your generated file will appear in the project's Develop directory, ready to be edited to your liking, saved, and added to your project.

## Credits
I recieved the starter code for this assignment from: [Starter Code](https://github.com/coding-boot-camp/potential-enigma)

I used this resource for the license badges and their links: [License Badge Markdown](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Screenshots

## Video Walkthrough
This video shows usage and functionality only. For installation, follow the above steps.
[Google Drive](https://drive.google.com/file/d/1V8fbmulMGAr4tggGb0Dcibv4sQq6wice/view)
