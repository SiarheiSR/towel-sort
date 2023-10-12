
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let result = [];
   for (const item of matrix) {
      result = result.concat(item);
   }
   return result.sort((a, b) => a - b);
}
