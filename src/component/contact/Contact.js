import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";
import { motion } from "framer-motion";
const Contact = ({ data }) => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .sendForm("service_mzracya", "template_xge7sdb", form.current, {
        publicKey: "l4c76KEHbT7ADt3MW",
        ...formData,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          console.log("is success :", isSuccess);
          
          reset();
          setTimeout(() => {
              setIsSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log("is success :", isSuccess);
        }
      );
  };

  const handleClearErrors = () => {
    if (errors.name) {
      clearErrors("name");
    } else if (errors.email) {
      clearErrors("email");
    } else {
      clearErrors("message");
    }
   }

  return (
    <div className="container-contact" id="contact">
      <div className="top-contact">
        <h2>Send me a message !</h2>
        <p className="subtitle-contact">{data.contactTitle}</p>
      </div>
      <div className="container-form">
        <form className="form" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="inputbox">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              onChange={handleClearErrors}
            />
          </div>

          <div className="inputbox">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              onChange={handleClearErrors}
            />
          </div>

          <div className="textarea">
            <input
              type="text"
              placeholder="Your message"
              {...register("message", { required: true })}
              onChange={handleClearErrors}
            />
          </div>
          <div className="errors-contact">
            {(errors.name || errors.email || errors.message) && (
              <div>
                <Alert variant="danger" className="danger-errors">
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="icone-alert-portfolio"
                  />{" "}
                  One or more fields required
                </Alert>
              </div>
            )}
            {isSuccess && (
              <div>
                <Alert variant="success" className="success-errors">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="icone-alert-portfolio"
                  />
                  Your message sended with success
                </Alert>
              </div>
            )}
          </div>

          <input type="submit" value=" Send " className="sendBut" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
