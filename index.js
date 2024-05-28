// server.js
require("dotenv").config(); // this line is mandatory when you want to read variables from the '.env' file

console.log(
  `My name is ${process.env.MY_NAME}, I live in ${process.env.MY_CITY} and i learn ${process.env.MY_LANGUAGE} in Wild Code School`
);
