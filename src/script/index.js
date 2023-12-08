// src/script/index.js
const readline = require('readline');
const { mainScript } = require('../script/main')
const { 
welcome_prompt,
  question_1,
question_2,
question_3,
question_4,
started_message,
success_message,
error_message } = require('../constants/prompts')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const runScript = () => {

console.log(welcome_prompt)
rl.question(question_1, (answer) => {
  const basePathInput = answer.trim() || './app';
  const basePath = basePathInput.startsWith('./') ? basePathInput : `./${basePathInput}`;

  rl.question(question_2, (choice) => {
      choice = choice.trim().toLowerCase();

      let file_extension = '';

    switch (choice) {
      case '1':
      case 'typescript':
      case 'Typescript':
      case 'tsx':
      case '.tsx':
      case '.ts':
      case 'ts':
        file_extension = '.tsx';
        break;
      case '2':
      case 'javascript':
      case 'Javascript':
      case 'jsx':
      case '.jsx':
      case '.js':
      case 'js':
        file_extension = '.jsx';
        break;
      default:
        file_extension = '.tsx'
        break;
    }

    if (file_extension) {

      rl.question(question_3, (layoutAnswer) => {
        const layoutInput = layoutAnswer.trim() || 'app/layout.json';
        const layoutsEnd = layoutInput.endsWith('.json') ? layoutInput : `${layoutInput}.json`;
        const layoutsStart = layoutsEnd.trim('./') || layoutsEnd

        const layoutRelativePath = "../../../../";

        const layouts = layoutRelativePath + layoutsStart
        // Run Script

        console.log(started_message)
        mainScript(layouts, basePath, file_extension)
        console.log(success_message)
        rl.close(); // Close the readline interface after obtaining the inputs
      })

    }
    // Rest of your script using basePath and file_extension...

  })
})
}

module.exports = { runScript };
