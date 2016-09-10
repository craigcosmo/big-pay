
## Stack

reactJS + redux architecture, ES6 syntax, Sass, Webpack as script build tool

## Installation

At the project root, run the following command

```
npm install
```


## Build

At the project root, run the following command

```
./build
```

What this command will do is, generate bundle.js, index.html and asset such as images and css files, all will be stored in dist/development folder

## Usage

At the project root, run the following command

```
./dev
```

This commnad is similar to build commnad. Except all generated files are stored in dist/production folder


## Unit test

```
npm run test
```

Then open browser and enter this url

```
http://localhost:8081/webpack-dev-server/
```

The url will automatically reload whenever there are changes made the in app/test folder


## NPM dependencies 

axios - for making ajax request
moment - for pasrsing date and time (ex: turn 12371238125 to 14th July 2016)
react - the react framework itself
react-modal - a modal component
react-router - for redirecting component and manipulating uri
store - a js lib for storing data using localstorage
react-dom - for rendering react component into html
react-tooltip - a tooltip component
react-hotkey - for adding cusmitize short to the app
classnames - for assigning relevant class name to element
firebase - for making connection with firebase
jquery - the jquery library itself
redux - redux library
lodash - lodash library
store - this is store.js for manipulating browser localstorage
...


## Folder structure 

```
app - everything about app logic, including components, CSS, helpers.
  |component - all components
  |helper - commonly used functions
  |sass - all scss and css files
  |store - main store file of components
  |vendor - js plugins
  |config.js - central config file
  |index.html - the main HTML of the app
  |index.js - this is central js file of the app, it calls all other component
font - to store fonts used in this app. This folder is not like font folder in public.
dist - contains built files and static assets such as images and fonts for deploy
image - store all images
```


## Plugins used in this project

Javascript plugins are store in vendor folder. These files should not be overidden/updated, they were extended functionally to meet project requirement.

## App achitecture  

This is a standard react redux achitecture

The entire application's data/state is stored in a single object called store (this file responsible for the store logic locates in app/store/store.js) all this happens in browser memory

The store's data is immutable, which means, to update or add new value in the store, we need to dispatch action, that action will then trigger a specific reducer, that reducer will change/update the data value in the store.

Actions locates at app/action/mainAction.js

Reducers locates at app/reducer/*.js. These reducers are pure functions.

Other than this everything is pretty self explained. To dive deep in into this achitecture, you can look up react redux, there are many detail guides across the net.

## To change API url

edit file `config.js`
