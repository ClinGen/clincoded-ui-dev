# ClinGen curator app UI development
This temporary project is for the development of the ClinGen curator app UI. It uses React to build a Javascript-driven front-end.

## Build and run
Once you clone this repository, first make sure you have [Node](https://nodejs.org) installed because it runs a very simple server so you can run this project locally. Also make sure you have [Grunt](http://gruntjs.com/getting-started) installed so you can build the project.

First, install the Node packages needed to build the project:

```
npm install
```

Then build the project:

```
grunt
```

Now the project is ready to run. First startup the server:

```
npm start
```

Then visit the site at http://localhost:8080.

## Development

I added a convenience so you can automatically rebuild the project when you save relevant files (HTML, Javascript, Sass). Just enter:

```
grunt dev
```

This holds that terminal window while it watches for changes to the files. To stop it watching for these changes and get your terminal back, Enter Control-C.

In addition, you can have Chrome automatically reload when the project is rebuilt if you have the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension loaded and enabled. You must first run ```grunt dev```, then click the LiveReload button in the Chrome toolbar so that there’s a black dot in the middle of it. Then saving a file not only rebuilds the project, it also automatically reloads the changes in Chrome.
