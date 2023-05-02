import { HeroBankBg, LogoRegister } from "../assets/Image";
import FormLogin from "../components/Login/FormLogin";
import FormRegister from "../components/Register/FormRegister";
import sx from "./Register.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={sx.register}>
      <div className={sx.left}>
        <h1>Let's get connect!</h1>
        <FormRegister />
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
          <h1>Secure your money</h1>
          <h1>With your own plan!</h1>
        <img src={LogoRegister} alt={LogoRegister} />
        </div>
      </div>
    </div>
  );
}

export default Login;
