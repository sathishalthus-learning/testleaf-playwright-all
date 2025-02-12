// promise

let fetchDataFromDatabase = new Promise((resolve, reject) => {

  if (dataAvailable) {
    resolve("found");
  } else {
    reject("not found");
  }
});

//Using the promise function

fetchDataFromDatabase
  .then((message) => {
    console.log("data fetched successfully");
  })
  .catch((error) => {
    console.log("data not found");
  });

var dataAvailable = true;
