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



function postData(username, message) {

}

function getData() {

}




fetch("http://localhost:3030/")
  .then((response) => response.json())
  .then((data) => console.log(data));


fetch("http://localhost:3030/", {
  method: "POST",
  body: JSON.stringify({
    msg: "Vad heter du",
    userName: "El"
  }),
  headers: { "Content-type": "application/json;  charset=UTF-8", "accept": "application/json" }
})
  .then((response) => response.json())
  .then((data) => console.log(data));