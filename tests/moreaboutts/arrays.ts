// Arrays 

const countries1 = ['India','Japan','Austria','Russia']

const states1 = new Array('Assam', 'UP', 'Hyd', 'Delhi')

// console.log(typeof states)
// 1.. Handling Functions
// const iseven1 = (number) => {
// return number %2===0
// }

// console.log(iseven1(2))

// //2. Way 2 function handle with function Calling
// // 2nd Way again the way function is called is bit different-only refernce
// var result = [2 ,4, 5].every(iseven1)
// console.log(result)

// //3. Way 3 function handle with callbacks
// // Call back just has three things - Paranthesis, Arrow Sign and Curly braces 
// // Call back is a simple function with no name
// // () => {} - Done

// var result = [2 ,4, 5].every((element) => {
// return element %2 ===0
// })
// console.log(result)


//4. Way 4 function handle with callbacks
// Just making it more cleanier
// Whenever you do not need return just remove curly braces and you are good
// () => {} changes to () => () // all insdie the function ()
// Whenever using last parthesis not need for the return if using return use {}

var result = [2 ,4, 5].every((element) => (element %2 ===0))
    console.log(result)



