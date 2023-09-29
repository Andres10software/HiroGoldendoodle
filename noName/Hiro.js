
function replyWoof() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const replyMessage = document.getElementById("replyMessage");

    if (userInput === "hello") {
        replyMessage.textContent = "Woof";
    } else {
        replyMessage.textContent = "Please say 'hello' to Hiro.";
    }
}
