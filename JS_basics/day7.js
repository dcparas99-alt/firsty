// // // const array1=[1,2,3,4,5];
// // // const array2=[4,5,6,7,8,9,10];
// // // const array3=[6,7,8,9,10,11,12];

// // // const arrabc=(a1, a2, a3)=>{
// // //     const combinedArray = [...a1, ...a2, ...a3];
// // //     const UniqueArray = [...new Set (combinedArray)];
// // //     const result =UniqueArray
// // //     .filter((num) => num % 2 !== 0)
// // //     .map((num)=>{
// // //         if(num > 2 && num <4) {
// // //             return num;
// // //         }
// // //     });
// // //     return result;

// // // };
// // // console.log(arrabc(array1,array2,array3));




// // // const arr1 = [1,2,3,4,5];
// // // const arr2 = [4,5,6,7,8];
// // // const arr3 = [7,8,9,10,11];

// // // const arabc=(a1,a2,a3)=>{
// // //     const combinedArray =  [...a1, ...a2, ...a3];
// // //     const UniqueArray = [...new Set (combinedArray)];
// // //     const result = UniqueArray.filter((num) => num % 2 !== 8)
// // //     .map((num) => {
// // //         if (num > 2 && num > 8) {
// // //             return num;
// // //         }
// // //     });

// // //     return result;
// // // };
// // // console.log(arabc(arr1,arr2,arr3));

// // const radheRadheBBusers=[
// //     {
// //         id:1,
// //         name:"bhaktapur gg",
// //         products:["Chocolates","KFC"],
// //         code:"BKT"
// //     },
// //     {
// //         id:2,
// //         name:"maharajgunj k",
// //         products:["perfume","pen"],
// //         code:"MG"
// //     }

// // ]

// // const koteshowerBBusers=[
// //     {
// //         id:6,
// //         name:"koteshowr b",
// //         products:["bags","shoe"],
// //         code:"KTS"},
// //         {
// //         id:8,
// //         name:"koteshowr k",
// //         products:["bags","shoe"],
// //         code:"KTS"
// //     },
// //     {
// //         id:4,
// //         name:"lagankhel l",
// //         products:["vodka","vodki"],
// //         code:"LK"
// //     },

    
// // ];

// // const bbc=()=>{
// //     const allUsers=[...radheRadheBBusers, ...koteshowerBBusers]
// //     const result= allUsers.filter((user)=>user.name==="koteshowr k").map((user)=>{
// //         return user.products
// //     })

// //     return result

// // }
// // // console.log(bbc())

// // const findEvenUserFromKTS=()=>{
// //     const allUsers=[...radheRadheBBusers, ...koteshowerBBusers]
// //     const result=allUsers.filter((user)=>user.id %2==0 && user.code==="KTS").map((user)=> user.products)
// //     return result.flat()
// // }
// // console.log(findEvenUserFromKTS())







// const userData = {
//     name: "alice",
//     address: "NYC",
//     age: 22,

// };
// console.log(Object.entries(userData));

// find vs filter

// const arr = [3,4,3,5].find((num) => num ===3);
// const arr1 = [3,4,4,3,5].filter((num) => num ===3);
// console.log(arr);
// console.log(arr1);

// every
// const allEvenNum = [2,4,6,1].every((num) => num % 2 === 0);
// console.log(allEvenNum);

// some
// const allEvenNum = [2,4,6,1].some((num) => num % 2 === 0);
// console.log(allEvenNum);





