
```
mkdir node_project
cd node_project

npm init

npm install -D typescript@3.3.3
npm install -D tslint@5.12.1

npm install -S express@4.16.4
npm install -D @types/express@4.16.1

//Configuring TypeScript

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}

// create tsconfig.json by
tsc --init

// create tslint.json by

./node_modules/.bin/tslint --init

{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "no-console": false
  },
  "rulesDirectory": []
}

// update package.json
{
  "name": "node-with-ts",
  "version": "1.0.0",
  "description": "",
  "main": "dist/app.js",
  "scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.16.1",
    "tslint": "^5.12.1",
    "typescript": "^3.3.3"
  },
  "dependencies": {
    "express": "^4.16.4"
  }
}

// create the source
mkdir src
touch src/app.ts

import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

npm start

```