
<h1 align="center">Jeeva-AI</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
</p>

> Jeeva Ai Internship Assignment

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/jdev12345/Jeeva-AI-/
$ cd frontend
$ npm install
$ npm start
$ cd ..
$ cd backend
$ npm install
```

## project structure
```terminal
backend/
   controllers/
     audioController.js
  models/
    audio.js
  routes/
    audioRouter.js
  app.js
  package.json
  package-lock.json   
frontend/
  public/
    favicon.ico
    favicon.ico
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    App.css
    App.js
    App.test.js
    AudioPlayer.js
    Form.js
    Table.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
  package.json
  package-lock.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ node app.js // npm run locally
```

# Screenshots of this project

User visit public and Home page
![User visit public and Home page](http://i.imgur.com/ORCGHHY.png)

User can sign in or sign up
![User can sign in or sign up](http://i.imgur.com/rrmbU5I.png)

After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account route](http://i.imgur.com/FzLB51u.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/amazingandyyy/mern/issues) (preferred)

Email Me: amazingandyyy@gmail.com (welcome, say hi)

## Author
[Amazingandyyy](https://amazingandyyy.com)

I recently launch my monthly mentorship program, feel free to reach out and see what we can grow together:

<a href="https://mentorcruise.com/mentor/andychen/"> <img src="https://cdn.mentorcruise.com/img/banner/fire-sm.svg" width="240" alt="MentorCruise"> </a>

## Join the growing community

[![Star History Chart](https://api.star-history.com/svg?repos=amazingandyyy/mern&type=Date)](https://star-history.com/#amazingandyyy/mern&Date)


### License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)
