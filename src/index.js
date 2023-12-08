// src/index.js
const { runScript } = require("./script/index.js");

// Function to run when invoking the package
function executeScript() {
  // Call the specific function or logic you want to execute
  runScript();
}

// Export the function for external usage
module.exports = { executeScript };
