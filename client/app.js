const myform = document.getElementById("promytForm");
const responsesContainer = document.getElementById("responsesContainer");

myForm.addEventListener("submit", sendChatRequest);
async function sendChatRequest(event) {event.preventDefault();
console.log("the promt is:", userPromt);

const response = await fetch("https://week-06-api-assignment.onrender.com/", {
    method: "POST",
    headers: {
        "content-Type": "application/json",
    },
    body: JSON.stringify[{ userPromt }],
});
const data = await response.json()
console.log("The data recieved back is",data);
const responseP = document.createElement["p"];
responseP.textContent = data;
responsesContainer.appendChild(responseP);
}