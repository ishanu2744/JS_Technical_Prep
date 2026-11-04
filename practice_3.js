// const url = "https://dog.ceo/api/breeds/list/all";

// const getData = (async () => {
//   console.log("Fetching data...");
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(response);
//     console.log("Data fetched successfully:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// })();

const data = {
  name: "Ishanu",
  age: 26,
  email: "ishanu@example.com",
};

function getData() {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

console.log("Fetching data...");
getData()
  .then((res) => {
    console.log("Data:", res);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
