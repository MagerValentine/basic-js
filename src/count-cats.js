module.exports = function countCats(matrix) {
  return matrix == undefined || matrix.length == 0 ? 0 : matrix.map(row => row == [] ? 0 : row.filter(item => item == "^^").length).reduce((acc, current) => acc += current);
};
