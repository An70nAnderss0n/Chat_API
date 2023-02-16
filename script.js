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

const submit = document.getElementById("btn-send");
const userName = document.getElementById("username");
const message = document.getElementById("message");

function postData(username, message) {
  fetch("http://localhost:3030/", {
    method: "POST",
    body: JSON.stringify({
      msg: message,
      userName: username,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getData() {
  fetch("http://localhost:3030/")
    .then((response) => response.json())
    .then((data) => {
      const newListItem = document.createElement("p");
      newListItem.innerText = "test";
    });
}

function onSubmitClick(event) {
  event.preventDefault();
  postData(userName.value, message.value);
  getData();
}

submit.addEventListener("click", onSubmitClick);
