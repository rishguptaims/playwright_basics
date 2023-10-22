// Arrays 

const countries = ['India','Japan','Austria','Russia']

const states = new Array('Assam', 'UP', 'Hyd', 'Delhi')

// console.log(typeof states)

const iseven = (number) => {
return number %2===0
}

console.log(iseven(2))

// 2nd Way
var result = [2 ,4, 8].every(iseven)
console.log(result)