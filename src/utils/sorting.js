export const sort = (arr, key1, key2)=>{
   
    // console.log('divisor ', divisor)
    return arr.sort(function(a, b) {
      // console.log(key2)
      let divisor1 = key2? a[key2]: 1
      let divisor2 = key2? b[key2]: 1
      a = a[key1]/divisor1
      b = b[key1]/divisor2
        if (a < b) {
          return -1;
        }
        if (a > b ) {
          return 1;
        }
        return 0;
      });
}