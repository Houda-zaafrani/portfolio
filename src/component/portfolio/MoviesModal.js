import Modal from "react-bootstrap/Modal";
import React from "react";
import "./movie.css";

const MoviesModal = ({ movieApp, onClose }) => {
  // console.log("modal :", movieApp);
  if (!movieApp || !movieApp.name || !movieApp.description) {
    return null; // Or you can render a message indicating that the project data is not available
  }
  return (
    <Modal show={true} onHide={onClose} className="Movie-modal" size="xl">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">
          <h3>
            {movieApp.name} :{" "}
            <span className="descriptionTodo">{movieApp.description}</span>
          </h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-content">
        <div className="container-image-modal">
          <div>
            <img
              src={movieApp.imageDetails.signin}
              alt=""
              className="imageTodo"
            />
            <h5>Sign in</h5>
          </div>
          <div>
            <img
              src={movieApp.imageDetails.signup}
              alt=""
              className="imageTodo"
            />
            <h5>Sign up (admin, user)</h5>
          </div>
          <div>
            <img
              src={movieApp.imageDetails.addMovie}
              alt=""
              className="imageTodo"
            />
            <h5>Add movie</h5>
          </div>
          <div>
            <img
              src={movieApp.imageDetails.filterMovies}
              alt=""
              className="imageTodo"
            />
            <h5>Filter movies,update and delete movie</h5>
          </div>
        </div>
        <div className="technologieTodo">
          <p>
            <span>Technology used : </span>
            {movieApp.technology}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <p className="linkGithubModal">
          <span>Link github : </span>
          <a href={movieApp.linkBitbucket}>{movieApp.linkBitbucket} </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default MoviesModal;
