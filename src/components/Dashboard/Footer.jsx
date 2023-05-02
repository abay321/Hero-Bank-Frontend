import { Link } from "react-router-dom";
import sx from "./Footer.module.css"
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

function Footer() {
  return (
    <footer className={sx.footer}>
      <ul>
        <li>
          <AiIcons.AiFillHome
            style={{
              fontSize: "30px",
            }}
          />
          <p>Home</p>
        </li>
        <li>
          <FaIcons.FaWallet
            style={{
              fontSize: "30px",
            }}
          />
          <p>My Wallet</p>
        </li>
        <li>
          <MdIcons.MdContacts
            style={{
              fontSize: "30px",
            }}
          />
          <p>My Contact</p>
        </li>
        <li>
          <BsIcons.BsFillCreditCardFill
            style={{
              fontSize: "30px",
            }}
          />
          <p>My Card</p>
        </li>
        <li>
          <FiIcons.FiMoreHorizontal
            style={{
              fontSize: "30px",
            }}
          />
          <p>More</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
