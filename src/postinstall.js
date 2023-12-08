const fs = require("fs");
const path = require("path");

// Script content as an object
const scriptContent = {
  scripts: {
    "generate-layouts": "node -e \"require('expo-router-auto-layout').executeScript()\"",
  },
  devDependencies: {
    "expo-router-auto-layout": "^1.3.0",
  },
};

try {
  // Find the project's root directory using INIT_CWD or fallback to __dirname
  const projectDir = process.env.INIT_CWD || path.resolve("../../", __dirname);

  const packageJsonPath = path.join(projectDir, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    console.log("Modifying package.json in the project root directory");
    const packageJson = require(packageJsonPath);

    // Update package.json with script content
    packageJson.scripts = {
      ...packageJson.scripts,
      ...scriptContent.scripts,
    };
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      ...scriptContent.devDependencies,
    };

    // Write the updated package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log("Root package.json updated successfully!");
  } else {
    console.error("Root package.json not found.");
  }
} catch (err) {
  console.error("Error occurred:", err);
}
