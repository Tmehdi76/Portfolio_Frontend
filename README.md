# Portfolio Project

This project is a portfolio website built using React, TypeScript, and Vite for the frontend, and Node.js with Express for the backend. It provides a minimal setup for a React application with TypeScript and includes configurations for Hot Module Replacement (HMR) and ESLint rules.

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
  - **Vite**: A build tool that provides fast development and builds for modern web projects.
  - **ESLint**: A tool for identifying and fixing problems in your JavaScript/TypeScript code.

- **Backend**:
  - **Node.js**: JavaScript runtime built on Chrome's V8 engine.
  - **Express**: Fast, minimalist web framework for Node.js.
  - **Nodemailer**: Module for sending emails from Node.js applications.

## Installation

### Frontend

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Install Dependencies

bash
Copy code
cd frontend
npm install
Run the Development Server

bash
Copy code
npm run dev
This will start the Vite development server with Hot Module Replacement (HMR) enabled.

Backend
Navigate to the Backend Directory

bash
Copy code
cd backend
Install Dependencies

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the backend directory with the following content:

env
Copy code
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Replace your-email@gmail.com and your-email-password with your actual email and password.

Run the Backend Server

bash
Copy code
npm start
This will start the Express server on port 5000.

Backend API
Send Email
Endpoint: /send-email

Method: POST

Request Body:

json
Copy code
{
  "name": "Your Name",
  "email": "your-email@example.com",
  "title": "Subject of the Email",
  "message": "Body of the email"
}
Description: Sends an email using Nodemailer with the provided details.

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

