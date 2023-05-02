import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PinOtp from "../PinOtp";
import sx from "./FormLogin.module.css";
import { message } from "antd";

const DUMMY_USER = [
  {
    email: "akbar@gmail.com",
    pin: 123456,
  },
  {
    email: "zia@gmail.com",
    pin: 121212,
  },
];

function FormLogin() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const enteredEmailIsValid = email.includes("@gmail.com");
  const userValid = DUMMY_USER.some(
    (user) => user.email === email && user.pin === parseInt(pin)
  );

  const handlePin = (enteredPin) => {
    setPin(enteredPin);
  };

  function handleSubmit(e) {
    e.preventDefault();
    message.loading("loading", 3);
    setTimeout(() => {
      setTimeout(() => message.success("Welcome back!"), 150);
      navigate("/");
    }, 3000);
    // if (pin.length < 6) {
    //   message.warning("Please fill out pin input.");
    // } else if (!enteredEmailIsValid) {
    //   message.error("Please fill out a valid Email.");
    // } else if (!userValid) {
    //   message.error("Email or Pin is not valid!");
    // } else {
    //   message.loading("loading", 3);
    //   setTimeout(() => {
    //     setTimeout(() => message.success("Welcome back!"), 150);
    //     navigate("/");
    //   }, 3000);
    // }
  }

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <div className={sx.form_controls}>
        <div className={sx.form_control}>
          <label htmlFor="email">
            <h2>
              <strong>Email</strong>
            </h2>
          </label>
          <input
            type="email"
            className={sx.email_input}
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            // required
          />
        </div>
        <div className={sx.form_control}>
          <label htmlFor="password">
            <h2>
              <strong>Pin</strong>
            </h2>
          </label>
          <PinOtp onHandlePinOtp={handlePin} />
          {/* <PinInput Pin={handlePin} /> */}
          <div className={sx.credential}>
            <Link to={"/credential"}>Forgot your credential?</Link>
          </div>
        </div>
        <div className={sx.form_actions}>
          <button type="submit">Login!</button>
        </div>
        <div>
          <Link to={"/registration"}>New member? Registration here!</Link>
        </div>
        <p>You are agree to aour terms and policies.</p>
      </div>
    </form>
  );
}

export default FormLogin;
