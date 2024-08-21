# Portfolio Project
live link : https://mehdiportfoli0.netlify.app/

This project is a portfolio website built using React, TypeScript, and Vite. It provides a minimal setup for a React application with TypeScript and includes configurations for Hot Module Replacement (HMR) and ESLint rules.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides fast development and builds for modern web projects.
- **ESLint**: A tool for identifying and fixing problems in your JavaScript/TypeScript code.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Install Dependencies

bash
Copy code
npm install
Run the Development Server

bash
Copy code
npm run dev
This will start the Vite development server with Hot Module Replacement (HMR) enabled.

Plugins
This project uses two official Vite plugins for React:

@vitejs/plugin-react: Uses Babel for Fast Refresh.
@vitejs/plugin-react-swc: Uses SWC for Fast Refresh.
ESLint Configuration
For a production application, it is recommended to expand the ESLint configuration to enable type-aware lint rules. You can update the configuration as follows:

Update ESLint Configuration

Edit your .eslintrc.js file to include:

javascript
Copy code
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
Update ESLint Plugins

Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked.
Optionally, add plugin:@typescript-eslint/stylistic-type-checked.
Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list.
bash
Copy code
npm install eslint-plugin-react --save-dev
Update your .eslintrc.js file:

javascript
Copy code
extends: [
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  // other configurations...
],
Contributing
Feel free to contribute to this project by submitting issues or pull requests. For any questions or suggestions, please open an issue in the repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.
