// src/script/main.js
const path = require("path");
const fs = require("fs");

const { nameFormatter } = require("../utils/nameFormatter");
const { LAYOUT_JSON_TEMPLATE } = require("../templates/LAYOUT_JSON_TEMPLATE");
const { VIEW_TEMPLATE } = require("../templates/VIEW_TEMPLATE");
const { DRAWER_TEMPLATE } = require("../templates/DRAWER_TEMPLATE");
const { PROVIDERS_TEMPLATE } = require("../templates/PROVIDERS_TEMPLATE");
const { SCREEN_TEMPLATE } = require("../templates/SCREEN_TEMPLATE");
const { TABS_TEMPLATE } = require("../templates/TABS_TEMPLATE");
const { TOPTABS_TEMPLATE } = require("../templates/TOPTABS_TEMPLATE");
const { STACK_TEMPLATE } = require("../templates/STACK_TEMPLATE");
const { INDEX_TEMPLATE } = require("../templates/INDEX_TEMPLATE");
const { ROOT_TEMPLATE } = require("../templates/ROOT_TEMPLATE");
const { ROUTER_TEMPLATE } = require("../templates/ROUTER_TEMPLATE");
const { HTML_TEMPLATE } = require("../templates/HTML_TEMPLATE");
const { LAYOUTS_TEMPLATE } = require("../templates/LAYOUTS_TEMPLATE");

const mainScript = (layoutPath, basePath, file_extension) => {
  let layouts;
  let createLayoutJson = false;
  let createRootFiles = true;

  try {
    layouts = require(layoutPath);
  } catch (err) {
    // If an error occurs while requiring layoutPath, fallback to the default path
    console.log("WARNING: layout json not found in:", layoutPath);
    layouts = require("../templates/layout.json");

    // Create layout.json
    console.log(`Creating default (layout.json) in: ${basePath}`);
    createLayoutJson = true;
  }

  function generateLayoutFile(item, itemPath) {
    const filePath = `${itemPath}/_layout${file_extension}`;
    const type = item.type || "";

    switch (type.toLowerCase()) {
      case "tabs":
      case "bottom-tabs":
      case "bottomtabs":
        fs.writeFileSync(filePath, TABS_TEMPLATE);
        break;
      case "toptabs":
      case "top-tabs":
        fs.writeFileSync(filePath, TOPTABS_TEMPLATE);
        break;
      case "drawer":
        fs.writeFileSync(filePath, DRAWER_TEMPLATE);
        break;
      case "stack":
        fs.writeFileSync(filePath, STACK_TEMPLATE);
        break;
      default:
        break;
    }
  }

  function generateIndexFile(item, itemPath) {
    const filePath = `${itemPath}/index${file_extension}`;
    const index = item.index || false;
    if (index) {
      fs.writeFileSync(filePath, "// Index File content goes here");
    }
  }

  function generateScreenFile(screenPath) {
    const getBoardName = path.basename(screenPath);
    const boardNameTo = nameFormatter(getBoardName);
    // Create the import path for the board
    const boardName = boardNameTo.capitalized;
    // const relativePath = path.relative(path.dirname(screenPath), basePath)
    // const importPath = path.join(relativePath, `../boards/${boardName}`)

    const content = SCREEN_TEMPLATE.replace(/{VIEW_NAME_GO_HERE}/g, `${boardName}Layout`);
    // const content = VIEW_TEMPLATE.replace(/{BOARD_NAME_GO_HERE}/g, boardName)
    //   .replace(/{IMPORT_FROM_PATH}/g, importPath)
    //   .replace(/{VIEW_NAME_GO_HERE}/g, `${boardName}Layout`)

    fs.writeFileSync(screenPath, content);
  }

  function processItems(item, itemPath) {
    if (!fs.existsSync(itemPath)) {
      fs.mkdirSync(itemPath, { recursive: true });
      if (createLayoutJson) {
        const filePath = `${basePath}/layout.json`;
        fs.writeFileSync(filePath, LAYOUT_JSON_TEMPLATE);
        createLayoutJson = false;
      }
      if (createRootFiles) {
        const rootLayoutPath = `${basePath}/_layout${file_extension}`;
        const providersLayoutPath = `${basePath}/providers${file_extension}`;
        const indexPath = `${basePath}/index${file_extension}`;
        const layoutsPath = `${basePath}/layouts${file_extension}`;
        const htmlPath = `${basePath}/+html${file_extension}`;
        const routerPath = `${basePath}/router${file_extension}`;

        const HTML_TEMPLATE_UPDATED = HTML_TEMPLATE.replace(/\{backtick}/g, "`");

        fs.writeFileSync(rootLayoutPath, ROOT_TEMPLATE);
        fs.writeFileSync(providersLayoutPath, PROVIDERS_TEMPLATE);
        fs.writeFileSync(routerPath, ROUTER_TEMPLATE);
        fs.writeFileSync(indexPath, INDEX_TEMPLATE);
        fs.writeFileSync(layoutsPath, LAYOUTS_TEMPLATE);
        fs.writeFileSync(htmlPath, HTML_TEMPLATE_UPDATED);
        createRootFiles = false;
      }
    }

    const screens = item.screens;
    generateLayoutFile(item, itemPath);
    generateIndexFile(item, itemPath);
    if (screens && Array.isArray(screens)) {
      screens.forEach((screen) => {
        if (screen.name) {
          let fileName = screen.name;
          switch (screen.display) {
            case "hidden":
              fileName = `(${screen.name})`;
              break;
            case "dynamic":
              fileName = `[${screen.name}]`;
              break;
            default:
              fileName = screen.name;
              break;
          }
          const screenPath = `${itemPath}/${fileName}${file_extension}`;
          generateScreenFile(screenPath);
        }
      });
    }
  }

  function processLayouts(layouts, basePath) {
    console.count("Layout Item Created");
    Object.entries(layouts).forEach(([layoutKey, currentLayout]) => {
      if (typeof currentLayout === "object" && currentLayout !== null && layoutKey !== "screens") {
        let itemName = layoutKey;

        switch (currentLayout.display) {
          case "hidden":
            itemName = `(${itemName})`;
            break;
          case "dynamic":
            itemName = `[${itemName}]`;
            break;
          default:
            itemName = itemName;
            break;
        }

        const itemPath = `${basePath}/${itemName}`;
        processItems(
          {
            name: layoutKey,
            ...currentLayout,
          },
          itemPath
        );

        // Recursively call processLayouts for nested layouts
        processLayouts(currentLayout, itemPath);
      }
    });
  }

  // Read layout data from the JSON file and start processing layouts
  processLayouts(layouts, basePath);
};

module.exports = { mainScript };
