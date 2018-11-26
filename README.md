# React-Boilerplate

# Table of Contents
1. [ Description. ](#desc)
2. [ Tools. ](#tool)
3. [ Installation. ](#inst)
4. [ Usage. ](#usage)
4. [ Tests. ](#test)
5. [ Credits. ](#credit)

<a name="desc"></a>
# Description
Basic boilerplate made with react. It contains a simple adder application as a simple example of how to it works.

<a name="tool"></a>
# Tools
This boilerplate comes up with a set of tools to make your development process easier and faster.

- **React:** A JavaScript library for building user interfaces.
- **Babel:** A free and open-source JavaScript compiler and configurable transpiler used in web development.
- **Webpack:** An open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.
- **File-loader:** A file loader module for webpack
- **Jest:** Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.

<a name="inst"></a>
# Installation
First, clone the github repository.

```
git clone https://github.com/SebastianAGC/React-Boilerplate.git
```
Next, install all packages needed for the boilerplate.

```
npm install
```

<a name="usage"></a>
# Usage
To use the boilerplate, simply navigate to the path *src/components/App/*. In there you'll find two files. *App.js* file is where you are going to the develop your own react application. *App.css* file is where you can customize your css classes to fit your app needs. After modifying your files, run the command:

```
npm run build
```
This will build your app and generate an index.html, main.js and all of your other components into the "dist" folder. Now that your app is all made up, start it using the following command:

```
npm start
```

Now your app will be running. At [localhost:8080](https://localhost:8080)

<a name="test"></a>
# Tests

This boilerplate comes with a Jest test-runner built-in to start testing your scripts. You can try out the built-in test that comes with the boilerplate in *sum.test.js*. To run the Jest test file execute:

```
npm run test
```
To create a test for *YourFile.js* simply create a *YourFile.test.js* file to start coding all the tests you need to run.

<a name="credit"></a>
# Credits
Sebastián Galindo
