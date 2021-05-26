Notice the tsconfig.json file here

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2015",
    "declaration": true,
    "outDir": "./dist"
  },
  "include": [
    "src/**/*"
  ]
}
```
The "declaration": true flag. This will generate the .d.ts files (aka declaration files) which contain the types of your code. This way, if someone is using your library and they also use TypeScript, they get the benefits of typesafety and autocomplete!


create a index.ts file in the src folder

export {sayHello, sayGoodbye} from './hello-world'

this will export the funtions from your library

And the consumers can use this library by

```
import {sayHello} from 'typescript-library-for-hw'
sayHello();
```

Once the code is done 

1. Transpile the ts to js by 
tsc

2. Then publish the package to npm using 
npm publish


https://zellwk.com/blog/publish-to-npm/