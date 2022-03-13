
// named function
function greet(name: string): string {
    return 'hello' + name;
}

// function expression
let func_exp = function (name: string) {
    return 'hello' + name;
}

// arrow function expression
let arrow_fucn_exp = (name: string) => {
    return 'hello' + name
}

// shorthand arrow func
let shor_arrow = (name: string) => 'hello' + name


// optional parameters
function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

//log('Page loaded')
//log("Fetching data", 'user001')

// default parameters
function log_default_param(message: string, userId = "Not sighed in") {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId)
}

log_default_param('Page loaded')
log_default_param("Fetching data", 'user001')


// generators
function* createNumbers(): IterableIterator<number> {
    let n = 0
    while(1) {
        yield  n++
    }
}

let numbers = createNumbers();
console.log(`first number for the generator ${numbers.next().value}`)
console.log(`second number for the generator ${numbers.next().value}`)
console.log(`third number for the generator ${numbers.next().value}`)


