class PromiseDemo2 {

    promiseReturningString(throwError: boolean): Promise<string> {
        return new Promise<string>(
          // The promise constructor takes a function that receives two callbacks:
          // `resolve` and `reject`
          (
            resolve: (outputValue: string) => void, // The `resolve` callback accepts a single string argument
            reject: (errorCode: number) => void // The `reject` callback accepts a single number argument
          ) => {
            if (throwError) {
              reject(101); // If `throwError` is true, reject with error code 101
            }
            resolve(`resolve with message`); // Otherwise, resolve with the given string message
          }
        );
    }
}
console.log(`1. calling promiseReturningString`);
let p1 = new PromiseDemo2();
p1.promiseReturningString(false)
    .then((returnval: string) => {
        console.log(`2.returnedValue : ${returnval}`);
    })
    .catch((errorCode: number) => {
        console.log(`this is not called`)
    });