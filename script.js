function sendMessage() {

    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<p class='user'>" + input + "</p>";

    let reply = "";

    if(input.toLowerCase() == "hello"){
        reply = "Hi 👋";
    }
    else if(input.toLowerCase() == "how are you"){
        reply = "I am fine 😊";
    }
    else if(input.toLowerCase() == "bye"){
        reply = "Goodbye 👋";
    }
    else{
        reply = "I don't understand 🤔";
    }

    chatbox.innerHTML += "<p class='bot'>" + reply + "</p>";

    document.getElementById("userInput").value = "";
}
