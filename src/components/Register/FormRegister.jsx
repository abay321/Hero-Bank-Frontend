import sx from "./FormRegister.module.css";
import { Link, useNavigate } from "react-router-dom";

import PinOtp from "../PinOtp";
import PinInput from "../PinInput";
import { useState } from "react";
import { message } from "antd";
function FormRegister() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handlePin = (enteredPin) => {
    setPin(enteredPin);
  };

  const userInformation = {
    pin: parseInt(pin),
    email,
    phoneNumber,
    username,
    country,
    province,
    city,
    district,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInformation);
    message.loading("Loading", 3);
    setTimeout(() => {
      setTimeout(() => message.success("Register success!"), 150);
      navigate("/login");
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <div className={sx.form_controls}>
        <div className={sx.form_left}>
          <div className={sx.form_control}>
            <label htmlFor="password">
              <h3>
                <strong>Pin</strong>
              </h3>
            </label>
            {/* <PinInput Pin={handleSubmit} /> */}
            <PinOtp onHandlePinOtp={handlePin} />
          </div>
          <div className={sx.divider_left} />
          <div className={sx.form_control}>
            <label htmlFor="email">
              <h3>
                <strong>Email</strong>
              </h3>
            </label>
            <input
              type="email"
              // required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={sx.form_control}>
            <label htmlFor="phoneNumber">
              <h3>
                <strong>Phone number</strong>
              </h3>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="081122223333"
              pattern="[0-9]{12}"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              // required
            />
          </div>
          <div className={sx.form_control}>
            <label htmlFor="username">
              <h3>
                <strong>Username</strong>
              </h3>
            </label>
            <input
              type="text"
              // required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className={sx.divider_center}>this is divider</div>
        <div className={sx.form_right}>
          <div className={sx.form_control}>
            <label htmlFor="country">
              <h3>
                <strong>Country</strong>
              </h3>
            </label>
            <input
              type="text"
              // required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className={sx.form_control}>
            <label htmlFor="province">
              <h3>
                <strong>Province</strong>
              </h3>
            </label>
            <input
              type="text"
              // required
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className={sx.form_control}>
            <label htmlFor="city">
              <h3>
                <strong>City</strong>
              </h3>
            </label>
            <input
              type="text"
              // required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={sx.form_control}>
            <label htmlFor="district">
              <h3>
                <strong>District</strong>
              </h3>
            </label>
            <input
              type="text"
              // required
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={sx.form_actions}>
        <button type="submit">Submit!</button>
      </div>
    </form>
  );
}

export default FormRegister;
