# Expo Router Auto Layout

🚀 Expo Router Auto Layout ! ✨

With a simple 'layout.json' file, define your app's structure, screen names, and more. Then, kickstart instant layout generation by running a script. 

🔧 This npm package simplifies app folder creation in Expo Router, eliminating tedious boilerplate code.

📦 More templates and options are on the way to further enhance your development experience!

## Get Started

### Installation
Run the following command in your project:

```
npm install expo-router-auto-layout
```
### Generate Layout
A script will be automatically added to your project's package.json. Execute the following command and follow the terminal prompts:

```
npm run generate-layout
```

Witness instant layout generation without any prerequisites. Start streamlining your app development process today!

## Example Layout.json:

```
{
  "example": {
    "type": "stack",
    "screens": [
      { "name": "screenA", "display": "hidden" },
      { "name": "screenB", "display": "dynamic" },
      { "name": "screenC" }
    ]
  },
  "group": {
    "display": "hidden",
    "screens": [
      { "name": "modalA", "display": "hidden" },
      { "name": "modalB", "display": "dynamic" },
      { "name": "modalC" }
    ]
  },
  "drawerWithNested": {
    "type": "drawer",
    "display": "hidden",
    "screens": [
      { "name": "drawerA", "display": "hidden" },
      { "name": "drawerB", "display": "dynamic" },
      { "name": "drawerC" }
    ],
    "nestedTabs": {
    "type": "tabs",
    "display": "hidden",
    "screens": [
      { "name": "tabA", "display": "hidden" },
      { "name": "tabB", "display": "dynamic" },
      { "name": "tabC" }
    ]
  }
  }
}
```

## Terminal Prompts:

- **Where would you like to create the layout?**
  - **Default:** `/app`
  - **Prompt:** Enter the desired location to create the layout.

- **Choose one of the file extensions:**
  - **Options:** Typescript, Javascript
  - **Default:** Typescript
  - **Prompt:** Select the desired file extension for your layout.

- **Specify the name of your layout.json:**
  - **Note:** If the layout file is not found, it will create a layout.json in the root directory of the project.
  - **Default:** `./app/layout.json` or leave empty to create a default layout.json.
  - **Prompt:** Enter the name and path for your layout.json or leave empty for a default configuration.

- **Would you like to overwrite files?**
  - **Options:** Yes (Y), No (n)
  - **Default:** No
  - **Prompt:** Choose whether to overwrite files specified in the layout (Note: Manually added files won't be affected).
