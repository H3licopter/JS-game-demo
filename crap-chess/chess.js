const gameBoard = [
  ['b-rook', 'b-knight', 'b-bishop', 'b-queen', 'b-king', 'b-bishop', 'b-knight', 'b-rook'],
  ['b-Pawn', 'b-Pawn', 'b-Pawn', 'b-Pawn', 'b-Pawn', 'b-Pawn', 'b-Pawn', 'b-Pawn'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
  ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
]

function displayPieces(gameBoard) {
  //Loop through gameBoard ranks
  for (let rank = 0; rank < gameBoard.length; rank++) {
    //Loop through gameBoard files
    for (let file = 0; file < gameBoard[rank].length; file++) {
      const pieceName = gameBoard[rank][file];
      if (pieceName !== '') {
        const piece = createPiece(pieceName);
        document.getElementById(rank.toString() + file.toString()).appendChild(piece);
      }
    }
  }
}

function createPiece(pieceName) {

  // Load the SVG content using an object tag
  const piece = document.createElement('object');
  piece.type = 'image/svg+xml';
  piece.data = './assets/' + pieceName + '.svg';
  piece.classList.add('piece');

  console.log(piece);
  return piece;
}


displayPieces(gameBoard);

