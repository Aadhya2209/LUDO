// Initialize variables for each player
let players = {
    red: { position: [0, 0, 0, 0], path: getRedPath() },
    green: { position: [0, 0, 0, 0], path: getGreenPath() },
    blue: { position: [0, 0, 0, 0], path: getBluePath() },
    yellow: { position: [0, 0, 0, 0], path: getYellowPath() }
};

// Roll the dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Move a piece
function movePiece(color, pieceIndex) {
    let diceValue = rollDice();
    let player = players[color];
    let newPosition = player.position[pieceIndex] + diceValue;
    
    // Ensure the new position does not exceed the path length
    if (newPosition < player.path.length) {
        player.position[pieceIndex] = newPosition;
        updatePiecePosition(color, pieceIndex, newPosition);
    } else {
        console.log(`${color} piece ${pieceIndex + 1} can't move further`);
    }
}

// Update piece position in the DOM
function updatePiecePosition(color, pieceIndex, position) {
    const piece = document.querySelector(`.${color}_piece${pieceIndex + 1}`);
    const cell = document.querySelector(player.path[position]);
    
    if (cell) {
        cell.appendChild(piece);
    }
}

// Path arrays for each player (simplified paths)
function getRedPath() {
    return ['.red_start', '.red1', '.red2', '.red3', '.red4', '.red5', '.red6', '.red7'];
}
function getGreenPath() {
    return ['.green_start', '.green1', '.green2', '.green3', '.green4', '.green5', '.green6', '.green7'];
}
function getBluePath() {
    return ['.blue_start', '.blue1', '.blue2', '.blue3', '.blue4', '.blue5', '.blue6', '.blue7'];
}
function getYellowPath() {
    return ['.yellow_start', '.yellow1', '.yellow2', '.yellow3', '.yellow4', '.yellow5', '.yellow6', '.yellow7'];
}

// Example function to move a piece
document.querySelector("#rollButton").addEventListener("click", () => {
    const color = "red";  // Change this to switch between players
    const pieceIndex = 0; // Index of the piece to move
    movePiece(color, pieceIndex);
});
