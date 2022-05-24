// arr = [-4, 3, -9, 0, 4, 1];

// const fn = (arr) => {
//   const len = arr.length;
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;

//   arr.map((el) => {
//     if (el > 0) {
//       pos++;
//     } else if (el < 0) {
//       neg++;
//     } else {
//       zero++;
//     }
//   }); }
// arr.forEach((el, i) => {
//   if (el > 0) {
//     pos++;
//   } else if (el < 0) {
//     neg++;
//   } else {
//     zero++;
//   }
// });
//   for (let i = 0; i < len; i++) {

//     if (arr[i] > 0) {
//         pos++
//     } else if (arr[i] < 0) {
//         neg++
//     } else {
//         zero++
//     }
//   }
//     const posCoff = pos / len;
//     const megCoff = neg / len;
//     const zeroCoff = neg / len;
//     return [posCoff, megCoff, zeroCoff];
//   };

//   let a = 2
//   const like =() =>{
//     a++
//     console.log(a)
// }

// const anoter = () =>{
//   let a =1;
//   console.log(a)
// }
// like()
// like()
// anoter()
// console.log(a)

n = [1,2,3,4,5,6,7,8,9];

function star(n) {
  let len = n.length;
  n.map((el) => {
    console.log(`${" ".repeat(Math.abs(el-len))}${"#".repeat(el)}`)
  }); }
  
  star(n)

  function miniMaxSum(arr) {
    // Write your code here
    let len = arr.length - 1;
    let max = 0;
    let min = 0;

        const sorted = arr.sort()

    sorted.map((el , i) => {
        if(i === 0) {
        min += el
    }  else if (i === len) {
        max += el
    } else {
    min += el
    max += el
    }
})
console.log(min , max)
}

