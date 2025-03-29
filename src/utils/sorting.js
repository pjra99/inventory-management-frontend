export const sort = (arr, key, key2)=>{
    let divisor = key2? key2: 1
    return arr.sort(function(a, b) {
        if (a[key]/a[divisor] < b[key]/a[divisor]) {
          return -1;
        }
        if (a[key]/a[divisor]> b[key]/a[divisor]) {
          return 1;
        }
        return 0;
      });
}