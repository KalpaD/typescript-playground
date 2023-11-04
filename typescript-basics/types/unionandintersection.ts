type Cat = {
    name: string,
    purr: boolean
}

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog


// assign Cat
let catDogOrBoth: CatOrDogOrBoth = {
    name: 'Bonkers',
    purr: true
}

// assign Dog
catDogOrBoth = {
    name: 'Domino',
    barks: true,
    wags: true
}

// assign Both
catDogOrBoth = {
    name: 'Donkers',
    barks: true,
    purr: true,
    wags: true
}

type StringOrNull = string | null

function trueOrNull(isTrue: boolean): StringOrNull {
    if (isTrue) {
        return 'true'
    }
    return null
}