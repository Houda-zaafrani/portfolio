import React, { useState } from "react";
import "./portfolio.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import TodoModal from "./TodoModal";
import MoviesModal from "./MoviesModal";
import movieBuzz from "../../images/movieBuzz.png";

const Portfolio = ({ todoList, movieApp }) => {
  const [showModalTodo, setShowModalTodo] = useState(false);
  const [showModalMovies, setShowModalMovies] = useState(false);

  /**************todo app******** */
  const openModalTodo = () => {
    setShowModalTodo(true);
  };

  const closeModalTodo = () => {
    setShowModalTodo(false);
  };
  /**************movies app******** */
  const openModalMovies = () => {
    setShowModalMovies(true);
  };

  const closeModalMovies = () => {
    setShowModalMovies(false);
  };
  return (
    <div className="container-portfolio" id="portfolio">
      <div className="slider-portfolio">
        <div>
          <span className="item3"> My awsome projects</span>
        </div>
        <div className="container-imgs">
          <img
          src={todoList.imageAbout}
          alt=""
          className="projects"
          onClick={openModalTodo}
        />
        <img
          src={movieApp.imageAbout}
          className="projects"
          onClick={openModalMovies}
          alt=""
        />
        </div>
      
      </div>

      {showModalTodo && (
        <TodoModal todoList={todoList} onClose={closeModalTodo} />
      )}

      {showModalMovies && (
        <MoviesModal movieApp={movieApp} onClose={closeModalMovies} />
      )}
    </div>
  );
};

export default Portfolio;
