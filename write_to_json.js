// importing the fs module
const fs = require("fs");

// initializing a JavaScript object
const user = 
[
    {
        id: 1,
        completeName: "Jennifer Jones",
        age: 20,
        gender: "F",
        race: "african"
    },
    {
        id: 2,
        completeName: "Joe Bango",
        age: 29,
        gender: "M",
        race: "White"
    },
    {
        id: 3,
        completeName: "Momo Pitse",
        age: 26,
        gender: "F",
        race: "african"
    }
];

// converting the JSON object to a string
const data = JSON.stringify(user);

// writing the JSON string content to a file
fs.writeFile(
    "./data.json", 
    data, 
    { 
        encoding: "utf8", 
        flag: "w+", 
        mode: 0o666 
  },  
  (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error)

  }

  console.log("data.json written correctly");
});

