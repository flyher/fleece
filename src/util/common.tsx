
/**
 * sort function
 */
function sortBy(attr: any, rev: any) {
  if (rev === undefined) {
    rev = 1;
  } else {
    rev = (rev) ? 1 : -1;
  }
  return function (a: any, b: any) {
    a = a[attr];
    b = b[attr];
    if (a < b) {
      return rev * -1;
    }
    if (a > b) {
      return rev * 1;
    }
    return 0;
  };
}
export { sortBy }