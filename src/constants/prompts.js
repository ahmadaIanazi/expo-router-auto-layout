// Art
// https://patorjk.com/software/taag/#p=testall&f=Block&t=Expo%0ARouter%0Av2
// cybermidiem | ANSI regular | ANSI shadow | Ivrit |  JS Stick Letters

const welcome_prompt = `

                                                    
███████╗██╗  ██╗██████╗  ██████╗                    
██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗                   
█████╗   ╚███╔╝ ██████╔╝██║   ██║                   
██╔══╝   ██╔██╗ ██╔═══╝ ██║   ██║                   
███████╗██╔╝ ██╗██║     ╚██████╔╝                   
╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝                    
██████   ██████  ██    ██ ████████ ███████ ██████   
██   ██ ██    ██ ██    ██    ██    ██      ██   ██  
██████  ██    ██ ██    ██    ██    █████   ██████   
██   ██ ██    ██ ██    ██    ██    ██      ██   ██  
██   ██  ██████   ██████     ██    ███████ ██   ██  
                                                    
Expo Router v2
AUTO LAYOUT GENERATOR v1.0


`;

const question_1 = `


Where you would like to create the layout? 

    Default: /app

█ Enter here: `;

const question_2 = `

Choose one of the file extensions:

  (1) Typescript
  (2) Javascript


Default: Typescript

█ Enter here: `;

const question_3 = `

Specify the name of your layout.json?

    Note: If the layout was not found
          it will create a layout.json
          in the root directory of 
          the project


Default: ./app/layout.json
- or - 
Leave empty, and it will create a default layout.json

█ Enter: `;

const question_4 = `

Would you like to overwrite files?
  
  This will overwrite files that 
  are specified in the layout
  but it will not effect files
  that are added manually

  1. Yes (Y)
  2. No  (n)


Default: No

█ Enter (Y/n): `;

const started_message = ` 


Generating..
                                              

`;

const success_message = ` 


█ Generated Successfully.

`;
const error_message = ` 


!! Error occurred .

`;

module.exports = {
  welcome_prompt,
  question_1,
  question_2,
  question_3,
  question_4,
  started_message,
  success_message,
  error_message,
};
