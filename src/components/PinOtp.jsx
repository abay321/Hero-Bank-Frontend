import sx from "./PinOtp.module.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
function PinOtp(props) {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handlePinChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && index >= 0 && index < pin.length) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value !== "") {
        focusNextInput(index);
      }
    }
  };

  const focusNextInput = (index) => {
    if (index < pin.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const focusPrevInput = (index) => {
    if (index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && pin[index] === "") {
      focusPrevInput(index);
    } else if (e.key === "ArrowLeft") {
      focusPrevInput(index);
    } else if (e.key === "ArrowRight") {
      focusNextInput(index);
    }
  };

  // console.log(pin);

  const pinStr = pin.join("");
  // console.log("pin : ", pinStr);

  useEffect(() => {
    props.onHandlePinOtp ? props.onHandlePinOtp(pinStr) : undefined;
  }, [pinStr, props]);

  // props.onHandlePinOtp(pinStr)

  return (
    <div className={sx.Pin}>
      <div className={sx.otpBox}>
        {pin.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            type="password"
            className={`${sx.control} ${index === 2 ? sx.space : undefined}`}
            maxLength="1"
            value={digit}
            onChange={(e) => handlePinChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PinOtp;
