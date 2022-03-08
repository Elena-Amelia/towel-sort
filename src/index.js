module.exports = function towelSort (matrix) {
    let arr = [];
    let str = '';
    if (arguments.length === 0) {return arr;}
    else {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           let columnIdx = i % 2 === 0 
           ? j
           : (matrix[i].length - j - 1);
        str += `${matrix[i][columnIdx]},`;
        }
      }
        arr = str.split(',');
        arr.pop();
        for (i = 0; i < arr.length; i++) {
           arr[i] = +arr[i];
        }
    return arr;
    }
  }
