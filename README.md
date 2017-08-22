# React Vanilla Boilerplate

![Vanilla Boilerplate](http://i.imgur.com/1gzCT3O.jpg)


Some really reasonable setup for React applications, no overhead and tons of libraries. 
Inspired by [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) but more minimal and less opinionated.
With small overhead, HMR is lightning fast, no stuttering and waiting any more!

Includes:

- React
- Redux
- React Router DOM
- Webpack as module bundler (and `webpack-dev-server`)
- Gulp for production builds and compiling SASS

Does *NOT* include:

- Test Frameworks
- Style / CSS / SASS loaders (there are so many better options than loading sass w loader, you decide)
- Heroku / AWS or any other deployment stuff


## Installation

You need NodeJS, obviously : ).

1. git clone `https://github.com/radenkovic/react-vanilla my-app`
2. `cd my-app`
3. `yarn`
4. `npm start`
5. if you want to edit global styles, open new console tab and run `gulp`


## Project Structure

Source files for the react app are in folder `/src`. Feel free to change the structure. 
Redux is also only loosely connected, so it can be easily and safely removed from `main.js` file (remove `<Provider>` wrapper and `createStore`).

Routes folder is for App Routes, where `index.js` (in the directory root) is to declare main Routes for the app.

You can read more about proper structure [here](https://github.com/davezuko/react-redux-starter-kit#project-structure).

## Public folder

If you want to use plain images, load fonts via url and so on, place them in `/public` folder, then you can include them, for example:

`/public/vanilla.jpg` = `<img src="/vanilla.jpg" />`

All files are copied in `./dist` folder when built


## Why Gulp and Webpack?

Because in reality apps need some global styles, and while scoped js/css mixture
looks good on paper, when used it's utterly slow (especially when you import something large, such as Bootstrap), sluggish and irritating.
Gulp SASS setup injects all `scss` files into index file (so compilation times are always few milliseconds).

Also, for build tasks, it's much easier to use gulp plugins (copying files, fonts, optimizing images and so on).

### If you don't like Gulp

You can entirely get rid of it:

1. remove `gulpfile.js` in root
2. configure webpack to copy files from `/public` to `/dist` folder 

That means no more global styling, you will need to add loaders or use `styled components`, `jss` or something similar.


## Builds

Distribution build can be made with:

- `npm run build`

It cleans `dist` directory and creates fresh app version. You can also run `npm run staticServer` to preview your production build locally.

### Build process streamline explained

1. Dist directory is cleaned (removed, `rimraf`)
2. Webpack compiles javascript and exports `index.html`, and js bundles (vendor, normalize, manifest and the main bundle) and all images loaded with `url-loader`
3. Gulp compiles sass in production mode (concat, autoprefixer, minify, revision hashing) to `./dist/css`, and injects the file into `index.html`

## What can be better (TBD)

`project.config.js` file is utilized only for webpack.config.js, but it should be used in gulpfile too (single source for app settings)
