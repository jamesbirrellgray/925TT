const Sorted = (arr, prop, ascending = true) => {
  let haveProp = arr.every(object => object.hasOwnProperty(prop));
  if (haveProp) {
    let newArr = arr.slice();
    newArr.sort((a, b) => {
      if (isNaN(Number(a[prop]))) {
        let textA = a[prop].toUpperCase(),
          textB = b[prop].toUpperCase();
        if (ascending) {
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        } else {
          return textB < textA ? -1 : textB > textA ? 1 : 0;
        }
      } else {
        return ascending ? a[prop] - b[prop] : b[prop] - a[prop];
      }
    });
    return newArr;
  }
  return arr;
};

export default Sorted;
