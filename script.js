const gameBoard = (() => {
  let boardArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const getValues = (i, j) => boardArray[i][j];
  const setValue = (a, b,  value) => boardArray[a][b] = value;
  function change(buttonID) {
    let elem = buttonID;
    elem.value = player1.getColor();
    elem.textContent = player1.getColor();
    return elem.value;
  }
  const makeBoard = () => {
    let buttonID = 0;
    for (let i = 0; i < boardArray.length; i++) {
      let innerArray = boardArray[i];
      for (let j = 0; j < innerArray.length; j++) {
        let boardContainer = document.querySelector('#boardContainer');
        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('id', buttonID.toString());
        buttonElement.setAttribute('class', 'buttonElement');
        buttonElement.addEventListener('click', function(event) {
          buttonElement.value = player1.getColor();
          buttonElement.textContent = player1.getColor();
        });
        boardContainer.appendChild(buttonElement);
        buttonID++;
    }
    }
  };
  return {
    getValues,
    setValue,
    makeBoard
  };
})();

const displayController = (() => {

})();

const player = (name, color) => {
  const getName = () => name;
  const getColor = () => color;
  return {getName, getColor};
};
const player1 = player('player1', 'x');
const player2 = player('player2', 'o');

gameBoard.makeBoard();
