// [
//   {
//     msg: "string",
//     userName: "string",
//     pDate: "dateString",
//   },
// ];

// {
//     "msg": "string",
//     "userName": "string"
//   }

fetch("http://localhost:3030/")
  .then((response) => response.json())
  .then((data) => console.log(data));
