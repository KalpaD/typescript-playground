class PromiseDemo {

    fnDelayedPromise(
        resolve: () => void, // this function will be called when the promise is resolved
        reject: () => void // this function will be called when the promise is rejected
        ) {
            function afterTimeout() {
                resolve();
            }
            // // Set a timeout of 1000ms and call the afterTimeout function when the timeout expires.
            setTimeout(afterTimeout, 10000);
        }

        delayedResponsePromise(): Promise<void> {
            // Create a new Promise object that takes a function as an argument.
            return new Promise<void>(this.fnDelayedPromise);
        }
}

let p = new PromiseDemo();
p.delayedResponsePromise();
