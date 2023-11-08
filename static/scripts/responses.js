function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi") {
        return "Hello";
    } 
    if (input == "how are you") 
    {
        return "good";
    } 
    if (input == "nice") 
    {
        return "thank you";
    } 
    else if (input == "goodbye") 
    {
        return "Talk to you later!";
    } 
    else {
        return "Try asking something else!";
    }
}
