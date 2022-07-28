
module.exports = function towelSort (matrix) {
  if ( matrix === [] || matrix  === undefined || matrix === null) { 
    return [] }  else {
  let newArr = matrix.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, [])
  return newArr}
}
