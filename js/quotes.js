const quotes = [
    `"Treat yourself like someone you are responsibile for helping."`,
    `"What you most want to find will be found where you least want to look."`,
    `"You don't get to pick the best thing, you get to pick your poison."`,
    `"Responsibility, that's what gives life meaning."`,
    `"Stand up straight with your shoulders straight."`,
    `"Set your house in order before you criticize the world."`,
    `"Pursue what is meaningful, not what is expedient."`,
    `"Tell the truth. Or at least don't lie."`,
    `"Assume the person you are listening to knows something you don't."`,
    `"Be precise in your speech."`,
    `"Pet a cat when you encounter one in the street."`
];
const quote = document.querySelector(".quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function init() {
    quote.innerText = todaysQuote;
}

init();