const path = require("path");

// console.log(path.dirname("C:/Users/prash/Desktop/Elluminati Training/NODE JS/thapa node/path_modules/index.js"));
// console.log(path.extname("C:/Users/prash/Desktop/Elluminati Training/NODE JS/thapa node/path_modules/index.js"));

// console.log(path.basename("C:/Users/prash/Desktop/Elluminati Training/NODE JS/thapa node/path_modules/index.js"));

console.log(path.parse("C:/Users/prash/Desktop/Elluminati Training/NODE JS/thapa node/path_modules/index.js"));

const obj = path.parse("C:/Users/prash/Desktop/Elluminati Training/NODE JS/thapa node/path_modules/index.js");

console.log(obj.ext)