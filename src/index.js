module.exports = function towelSort(matrix) {
    let arr = [];
    if (!matrix || matrix.length === 0) {
        return arr;
    }
    matrix.map(function (elem, index) {
        if (index % 2 === 0) {
            arr.push(elem);
        } else
            arr.push(elem.reverse());
    })
    return arr.flat();
}
