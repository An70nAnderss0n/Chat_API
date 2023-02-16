const submit = document.getElementById("btn-send");
const userName = document.getElementById("username");
const message = document.getElementById("message");
const chatten = document.getElementById("chatLog");

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
  }).then(() => getData());
  // .then((data) => console.log(data));
}

function getData() {
  fetch("http://localhost:3030/")
    .then((response) => response.json())
    .then((data) => {
      const newItem = document.createElement("p");
      newItem.innerHTML = `${data[0].userName}: <br> ${data[0].msg}`;
      chatten.appendChild(newItem);
    });
}

function onSubmitClick(event) {
  event.preventDefault();
  postData(userName.value, message.value);
}

submit.addEventListener("click", onSubmitClick);
