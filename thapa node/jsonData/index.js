const bioData = {
    name : "Prashant",
    age : 21,
    gender : "Male",
    qualifications : "BE",
    yop : 2023
}

// console.log(bioData.name)

// to change data from object to JSON format
let data = JSON.stringify(bioData)
console.log(data)
// {"name":"Prashant","age":21,"gender":"Male","qualifications":"BE","yop":2023}

// to change data from  JSON format to object
let objdata = JSON.parse(data)
console.log(objdata)
// {
//     name: 'Prashant',
//     age: 21,
//     gender: 'Male',
//     qualifications: 'BE',
//     yop: 2023
//   }