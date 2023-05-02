import { HeroBankBg } from "../assets/Image";
import FormLogin from "../components/Login/FormLogin";
import sx from "./Login.module.css";

function Login() {
  return (
    <div className={sx.login}>
      <div className={sx.left}>
        <div className={sx.background}></div>
        <h1>Login your account.</h1>{" "}
        <>
          <FormLogin />
        </>
      </div>
      <div className={sx.right} >
        <img src={HeroBankBg} alt="" />
        <div className={sx.title}>
          <h1>
            <span>H</span>ER<span>O</span>
          </h1>
        </div>
        <div className={sx.divider}></div>
        <div className={sx.second_line}>
          <h1>Your new V - Bank</h1>
          <h1>Start your future with us.</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
