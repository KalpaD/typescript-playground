// where
// you have a value whose type you really don’t know ahead of time, don’t use any, and
// instead reach for unknown
let d: unknown = 30
let e = a === 123
let f = a + 10

if (typeof a === 'number') {
    let d = a + 10
}
