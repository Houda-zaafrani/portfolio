import todo from "../images/auth.png";
import movieBuzz from "../images/movieBuzz.png";

import addMovie from "../images/addMovie.png";
import filterMovies from "../images/filterMovie.png";
import signin from "../images/signin.png";
import signup from "../images/signup.png";

import signupTodo from "../images/signupTodo.png";
import signinTodo from "../images/signinTodo.png";
import addTodo from "../images/addTodo.png";
import deleteTodo from "../images/deletetodo.png";

export const todoList = {
  name: "To-Do-List",
  description:
    "Powerful tools that can help us better manage our tasks and time",
  // .To-do lists help us to manage (create, get, update, delete) a task.
  imageAbout: todo,
  imageDetails: {
    signupTodo,
    signinTodo,
    addTodo,
    deleteTodo,
  },
  technology:
    "node, html, css, mongoDB, express, react, Javascript, react-bootstrap, uiverse.oi",
  linkBitbucket: "https://github.com/Houda-zaafrani/todo-List",
};

export const movieApp = {
  name: "MovieApp",
  description: "Discover the trending movies in the cinematic world ",
  imageAbout: movieBuzz,
  imageDetails: {
    addMovie,
    filterMovies,
    signin,
    signup,
  },
  technology:
    "node, html, css, mongoDB, express, react, Javascript, framer-motion, react-bootstrap, uiverse.oi",
  linkBitbucket: "https://github.com/Houda-zaafrani/buzz-movies",
};
