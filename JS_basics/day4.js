// const arr = [1,2,3];
// const arr2 = [5,6,7];
// const abb2 = [0,...arr, 4, ...arr2];
// // console.log(abb2);

// // map, filter, foreach, reduce

// // abb2.map((num) => {
// //     console.log(num);
// // });

// abb2.map((num) => {
//     console.log(num *2 );
// });

// mergedARRay
// const arr = [0,1,2,3,4,5,6,7];
// const arr2 = [8,9,10];
// const abb2 = [...arr, ...arr2];
// //||=or operator
// // &&=and operator
// abb2.map((num) =>{
//     if (num !== 0 && num  % 2 === 0){
//         console.log(`${num} is even`);
//     }
// });
// const arr = [0,1,2,3,4,5,6,7];
// const arr2 = [8,9,10];
// const abb2 = [...arr, ...arr2];
// //||=or operator
// // &&=and operator
// abb2.map((num) =>{
//     if (num % 2 !== 0 && num > 7){
//         console.log(`${num} is odd and greater then 7`);
//     }
// });



const xyz =(array1, array2) => {
    const mergedArray = [...array1,  ...array2];
    const result = mergedArray.map((num) => {
         if (num % 2 !==0 && num >5 || num <10 ) {
            console.log(num, "<---this number met the condition");
            return num;
         }
    });
    return result;

};

console.log(xyz([0,1,2], [3,4,5,6,7,8,9,10,11,12,13]));
