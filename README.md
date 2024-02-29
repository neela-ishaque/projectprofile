# How to run:
### steps:
1. install [node.js] (https://nodejs.org/en)
1. clone the File from [Github Repo] (github.com/neela-ishaque/yasminprofile)
1. open the folder from computer Downloads
1. open with IDE in current path
1. open terminal type -´$npm install´
1. open terminal type -´$npm run dev´

# Introduction to planning the Project:
I started to plan according to my figjam.As the project recommend I built the sketch of project on figma.Then I reasearched for modern portfolio style and tried to implement it on my project.


As our project suggests to use react.js , I did my project with react.js .

# Features:

## Redux :
I have created themeSlice.js where I created a slice from redux toolkit hook and in the slice I have defined the action and initial state and reducers where it will toggle the theme by using redux. That toggleTheme will accept initialState as our globalState and store will trigger the reducer when our ThemeSwitcher will dispatch() the action and it will change the theme of my portfolio from my navigation component.

## Component Structure and Dataflow:
I created some reusable component like: project card, footer, feature and i used it in many sections in my project with props.

## React Router:
I implemented my navigation system with SPA logic and React Router which gives my  website page browsing without any loading.

## useState Hook:
For updating and set the value of the variable from a user I tried it with all of my variables in React.js



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

