let h = Symbol('h')
let j: symbol = Symbol('b')
let k = h === b
let l = a + 'x'


const symbol = Symbol('e')
// that symbol is unique, and will not be equal (when compared with == or ===)
// to any other symbol (even if you create a second symbol with the same exact name!).
const j_unique: unique symbol = Symbol('f')

//let compare_symbol = symbol === j_unique