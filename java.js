// Define a function to play rock-paper-scissors game
function playGame() {
    // Array of possible choices
    const options = ["rock", "paper", "scissors"];

    // Play five games
 let wins = 0; // Initialize the number of wins
    for (let i = 0; i < 5; i++) {
        // Get the player's choice
        let playerChoice = prompt("Choose: rock, paper, or scissors?");
        
        // Get the computer's choice
        let computerChoice = options[Math.floor(Math.random() * options.length)];

        // Determine the winner
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!");
            wins++; // Increment the number of wins
        } else {
            console.log("Computer wins!");
        }
    }

    // Display the number of wins
    console.log("You won " + wins + " out of 5 games.");
}

// Call the function to play the game
playGame();









