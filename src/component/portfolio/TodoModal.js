import Modal from "react-bootstrap/Modal";
import React from "react";
import "./Todo.css";
const TodoModal = ({ todoList, onClose }) => {
  return (
    <Modal show={true} onHide={onClose} className="todo-modal" size="xl">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">
          <h3>
            {todoList.name} :{" "}
            <span className="descriptionTodo">{todoList.description}</span>
          </h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-content">
        <div className="container-image-modal">
          <div>
            <img
              src={todoList.imageDetails.signinTodo}
              alt=""
              className="imageTodo"
            />
            <h5>Sign in</h5>
          </div>
          <div>
            <img
              src={todoList.imageDetails.signupTodo}
              alt=""
              className="imageTodo"
            />
            <h5>Sign up </h5>
          </div>
          <div>
            <img
              src={todoList.imageDetails.addTodo}
              alt=""
              className="imageTodo"
            />
            <h5>Add Todo</h5>
          </div>
          <div>
            <img
              src={todoList.imageDetails.deleteTodo}
              alt=""
              className="imageTodo"
            />
            <h5>Delete Todo</h5>
          </div>
        </div>
        <div className="technologieTodo">
          <p>
            <span>Technology used : </span>
            {todoList.technology}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <p className="linkGithubModal">
          <span>Link github :</span>
          <a href={todoList.linkBitbucket}>{todoList.linkBitbucket} </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
