const gameBoard = (() => {
  let boardValues = ["","","","","","","","",""];
  const getValues = () => boardValues;
  const setValue = (a, value) => boardValues[a] = value;
  const makeBoard = () => {
    for (let i = 0; i < boardValues.length; i++) {
      let boardContainer = document.querySelector('#boardContainer');
      let field = document.createElement('div');
      field.setAttribute('id', 'field' + i);
      field.setAttribute('class', 'field');
      field.addEventListener('click', setValue(i, player.getColor));
      boardContainer.appendChild(field);
    };
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
gameBoard.setValue(1, player1.getColor());
console.log(gameBoard.getValues());
