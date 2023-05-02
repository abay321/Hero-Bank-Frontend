import Header from "../components/Dashboard/Header";
import MainPageAccount from "../components/Account/MainPageAccount";

import sx from "./Account.module.css";

function Account() {
  return (
    <div className={sx.account}>
      <Header />
      <MainPageAccount />
    </div>
  );
}

export default Account;
