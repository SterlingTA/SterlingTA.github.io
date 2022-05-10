// Functions that reveal more information about the projects when click

let message = document.getElementById("message");
let messageDesc = document.getElementById("messageDesc")
messageDesc.hidden = true;

function getMessage(event) {
    messageDesc.hidden = !messageDesc.hidden


}

message.onclick = getMessage;