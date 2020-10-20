const Player = (name, color) => {
  const getName = () => name;
  const setName = (newName) => name = newName;
  const getColor = () => color;
  return {getName, setName, getColor};
};

const gameBoard = (() => {
  
  let boardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
  const getValue = (i) => boardArray[i];
  const setValue = (i,  value) => boardArray[i] = value;

  // Creates the GameBoard
  const makeBoard = () => {
    for (let i = 0; i < boardArray.length; i++) {
        let buttonElement = document.getElementById(i.toString());
        buttonElement.setAttribute('class', 'buttonElement');
        
        buttonElement.addEventListener('click', function(event) {
          buttonElement.value = displayController.currentPlayer().getColor();
          buttonElement.textContent = displayController.currentPlayer().getColor();
          gameBoard.setValue(i, displayController.currentPlayer().getColor());
          this.disabled = true;
          if (displayController.checkWinner()) {
           displayController.endGame();            
          } else {
            displayController.changePlayer();
            }
          });   
    }
  };
  return {
    getValue,
    setValue,
    makeBoard
  };
})();

const displayController = (() => {
  
  let player1 = Player("Player 1", "X");
  let player2 = Player("Player 2", "O");
  
  let activePlayer = player1;
  
  const currentPlayer = () => activePlayer;
  
  const changePlayer = () => {
    if (activePlayer === player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  };
  
  const startGame = () => {
    // Player Name input and game start button
  	let firstPlayerTextfield = document.getElementById("firstPlayerName");
    let secondPlayerTextfield = document.getElementById("secondPlayerName");
    if (firstPlayerTextfield.value == "") {
      //"Player 1"
    } else {
      player1.setName(firstPlayerTextfield.value);
    }
    if (secondPlayerTextfield.value == "") {
      //Player 2
    } else {
      player2.setName(secondPlayerTextfield.value);
    }
    let startButton = document.getElementById("startGameButton");
    startButton.addEventListener('click', function(event) {
      location.reload();
    });
    gameBoard.makeBoard();
  }
  
  // TODO: This can be done in a more simple way, like checkEquality(a, b, c) => a == b && a == c
  const checkWinner = () => {
    // Check rows
    if (gameBoard.getValue(0) == gameBoard.getValue(1) && gameBoard.getValue(0) == gameBoard.getValue(2)) {
      return true;
    } else if (gameBoard.getValue(3) == gameBoard.getValue(4) && gameBoard.getValue(3) == gameBoard.getValue(5)) {
      return true;
    } else if (gameBoard.getValue(6) == gameBoard.getValue(7) && gameBoard.getValue(6) == gameBoard.getValue(8)) {
      return true;
    // Check columns
    } else if (gameBoard.getValue(0) == gameBoard.getValue(3) && gameBoard.getValue(0) == gameBoard.getValue(6)) {
      return true;
    } else if (gameBoard.getValue(1) == gameBoard.getValue(4) && gameBoard.getValue(1) == gameBoard.getValue(7)) {
      return true;
    } else if (gameBoard.getValue(2) == gameBoard.getValue(5) && gameBoard.getValue(2) == gameBoard.getValue(8)) {
    return true;
    // Check diagonals
    } else if (gameBoard.getValue(0) == gameBoard.getValue(4) && gameBoard.getValue(0) == gameBoard.getValue(8)) {
      return true;
    } else if (gameBoard.getValue(2) == gameBoard.getValue(4) && gameBoard.getValue(2) == gameBoard.getValue(6)) {
      return true;
    } else {
      return false;
    }
  };

  const endGame = () => {
    let winMessage = document.getElementById("winMessage");
    winMessage.textContent = `${displayController.currentPlayer().getName()} wins!`;
    let fieldButtons = document.getElementsByClassName("buttonElement");
    [...fieldButtons].forEach(button => {
      button.disabled = true;
    });
  }
  return {currentPlayer, changePlayer, startGame, checkWinner, endGame};
})();


displayController.startGame();