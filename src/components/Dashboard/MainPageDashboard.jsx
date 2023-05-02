import {
  AddCircle,
  DollarCoin,
  EditCalendar,
  Iklan,
  LogoDolar,
  Payments,
  PriceCheck,
  RealEstate,
} from "../../assets/Image";
import sx from "./MainPageDashboard.module.css";

function MainPageDashboard() {
  return (
    <main className={sx.mainpage_dashboard}>
      <div className={sx.left_mainpage}>
        <img src={Iklan} alt="" className={sx.iklan} />
        <ul>
          <li>
            <img src={EditCalendar} alt="" />
            <div className={sx.description}>
              <p>often forget to pay bills?</p>
              <h2>Create a payment plan</h2>
            </div>
          </li>
          <li>
            <img src={AddCircle} alt="" />
            <div className={sx.description}>
              <p>Want to add a shortcut?</p>
              <h2>Add shortcut</h2>
            </div>
          </li>
        </ul>
      </div>
      <div className={sx.right_mainpage}>
        <div className={sx.container}>
          <div>
            <img src={LogoDolar} alt="" />
            <h2>Main pocket</h2>
            <p>Rp. 1.000.000,-</p>
          </div>
          <div>
            <img src={PriceCheck} alt="" />
            <h2>Pay Bills</h2>
          </div>
          <div>
            <img src={Payments} alt="" />
            <h2>Send and pay</h2>
          </div>
          <div>
            <img src={DollarCoin} alt="" />
            <h2>My balance</h2>
          </div>
          <div>
            <img src={RealEstate} alt="" />
            <h2>Collect debt</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPageDashboard;
