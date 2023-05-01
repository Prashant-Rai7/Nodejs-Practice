import fs from "fs";
import { json } from "stream/consumers";

const bioData = {
  name: "Prashant",
  age: 21,
  gender: "Male",
  qualifications: "BE",
  yop: 2023,
};

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

// fs.writeFile("jsonData.json", jsonData , (err) => {
//     console.log("done")
// })

fs.readFile("jsonData.json", "utf-8", (err, data) => {
  console.log(data);
  const obgdata = JSON.parse(data);
  console.log(data);
  console.log(obgdata);
});
