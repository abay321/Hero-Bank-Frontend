import { useState } from "react";
import styles from "./PinInput.module.css";

function PinInput(props) {
  const [pin, setPin] = useState("");

  const handlePinChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 6) {
    setPin(value);
    }

      props.Pin(value);
  };

  return (
    <input
      type="text"
      // placeholder="• • • • • •"
      className={styles.pinInput}
      style={{
        letterSpacing: pin.length > 0 ? "2rem" : "1rem",
        paddingLeft: pin.length > 0 ? "2rem" : "1rem",
      }}
      maxLength="6"
      value={pin}
      onChange={handlePinChange}
      required
    />
  );
}

export default PinInput;
