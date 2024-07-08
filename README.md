# Cryptogame MERN Project

### Description

**Cryptogame** project just a leatning project for grow and show skills in MERN stack. Any corrections into poject without proper PR are ***strictly prohibited***. 

**Instructions**

1. Clone repository: 
```sh 
git clone https://github.com/SuperDed34/cryptogame.git
```
2. Create your own local branch and strictly work in it:
```sh
git checkout -b <here is your nickname>
```
3. Install all dependencies into root folder and into client folder:
```sh
npm install
cd ./client
npm install
cd ../
```
4. Check the configure file package.json:
```json

  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "server": "nodemon --env-file=.env ./server/index.js ",
    "client": "npm run dev --prefix client"
  },
  "dependencies": {
  ...here is all dependencies
```

4. Run project from root folder: 
```sh
npm run dev
```