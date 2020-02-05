console.log("JS Loaded!")

let matrixCells = [];
for(var i = 0 ; i < 10 ; i++) {
  matrixCells[i] = [0, 0, 0, 0, 0, 0, 0, 0,0 ,0];
}

let matrix = document.getElementById('matrix-wrapper');
matrixCells.map(function(index, matrixCellCol) {
  console.log(matrixCellCol)
})