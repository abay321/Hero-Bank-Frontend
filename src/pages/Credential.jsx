import { Link, useNavigate } from "react-router-dom";
import sx from "./Credential.module.css";
import { HeroBankBg, LogoCredential } from "../assets/Image";
import { useState } from "react";
import { message } from "antd";

const DUMMY_EMAIL = ["akbar@gmail.com"];

function Credential() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const enteredEmail = email.includes("@gmail.com");
  const emailIsValid = DUMMY_EMAIL.includes(email);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      message.error("Please input the email!");
    } else if (!enteredEmail) {
      message.error("Email is not valid!");
    } else if (!emailIsValid) {
      message.error("Email not found!");
    } else {
      console.log(email);
      message.loading("Loading", 3);

      setTimeout(() => {
        navigate("/login");
        setTimeout(() => {
          message.success("Send verification success");
        }, 150);
      }, 3000);
    }
  };

  return (
    <div className={sx.credential}>
      <div className={sx.left}>
        <h1>Insert your email!</h1>{" "}
        <p>We will send you the email for verification</p>
        <form action="" className={sx.form_controls} onSubmit={submitHandler}>
          <div className={sx.form_control}>
            <label htmlFor="email">
              <h2>
                <strong>Email</strong>
              </h2>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //   required
            />
          </div>
          <div className={sx.form_action}>
            <button>Send!</button>
          </div>
        </form>
      </div>
      <div className={sx.right}>
        <div className={sx.logo_header}>
          <img src={HeroBankBg} alt="" />
          <span>
            <strong>
              <h1>Hero</h1>
            </strong>
            <p>Bank.</p>
          </span>
        </div>
        <div className={sx.text_container}>
          <img src={LogoCredential} alt={LogoCredential} />
          <h1>Let’s find your future assets!</h1>
          <h1>Hero bank will always help u!</h1>
        </div>
      </div>
    </div>
  );
}

export default Credential;
