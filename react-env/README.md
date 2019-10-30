# React - Using .env files

This is a basic app that uses `.env` files for configuration. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup

The .env files should not exist in the repo. Create a file named `.env.local` in the root of the project. Set the contents of that file to:

```
REACT_APP_TEST_PHRASE=This one goes to eleven

```
Install the dependencies then run the project.

```
npm install

npm run start
```

The test phrase from the `.env.local` file should show on the page. This file will not be included if you build the app for deployment.
