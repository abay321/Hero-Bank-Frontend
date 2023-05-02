import * as FaIcons from "react-icons/fa";
import sx from "./MainPageAccount.module.css";
import { Link, useNavigate } from "react-router-dom";
import { HeroBankBg, LogoProfile } from "../../assets/Image";

function MainPageAccount() {
  const navigate = useNavigate()
  
  return (
    <main className={sx.mainpage_account}>
      <div className={sx.profile}>
        <div className={sx.left_profile}>
          <Link to={"/"}>
            <FaIcons.FaArrowLeft style={{ fontSize: "20px" }} />
            <h3>Return to home.</h3>
          </Link>
          <img src={LogoProfile} alt="" />
          <div className={sx.about_left}>
            <h1>USERNAME</h1>
            <p>email@gmail.com</p>
            <p>+62 123 4567 8901</p>
          </div>
        </div>
        <div className={sx.right_profile}>
          <ul>
            <li>
              <div className={sx.title}>Account number</div>
              <p>1234 5678 9999</p>
            </li>
            <li>
              <div className={sx.title}>Account status</div>
              <p>Active</p>
            </li>
            <li>
              <div className={sx.title}>Nickname</div>
              <p>Username</p>
            </li>
            <li>
              <div className={sx.title}>Join at</div>
              <p>2023-04-25</p>
            </li>
            <li>
              <div className={sx.title}>Address</div>
              <p>
                Indonesia, Jawa barat, <br />
                Bekasi, Mustikajaya
              </p>
            </li>
            <div className={sx.logout_profile}>
              <button onClick={() => navigate("/login") }>
                <h1>Logout</h1>
              </button>
            </div>
          </ul>
          <footer>
            <img src={HeroBankBg} alt="" />
            <p>Hero bank Copyright © 2023</p>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default MainPageAccount;
