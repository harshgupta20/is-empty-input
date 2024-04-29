# 📦 is-empty-input

![npm version](https://img.shields.io/npm/v/is-empty-input) ![license](https://img.shields.io/npm/l/is-empty-input)

A simple Node.js package that checks whether a given input is `null`, `undefined`, an empty string, an empty array, or an empty object. This package is useful for basic input validation in JavaScript projects.

## 🚀 Installation

To install the package in your project, use npm:

```bash
npm install is-empty-input
```

## ✨ Usage
After installation, you can import the package into your JavaScript files and use it to check input values. Here are some examples:

```jsx
const isEmptyInput = require('is-empty-input');

// These should return true
console.log(isEmptyInput(null)); // true
console.log(isEmptyInput(undefined)); // true
console.log(isEmptyInput('')); // true
console.log(isEmptyInput('   ')); // true
console.log(isEmptyInput([])); // true
console.log(isEmptyInput({})); // true

// These should return false
console.log(isEmptyInput('hello')); // false
console.log(isEmptyInput([1, 2, 3])); // false
console.log(isEmptyInput({ key: 'value' })); // false
console.log(isEmptyInput(0)); // false


```

## [Connect With Me - Harsh Gupta](https://www.linkedin.com/in/harshgupta2001/) 