
import Footer from "../components/Dashboard/Footer";
import Header from "../components/Dashboard/Header";
import MainPageDashboard from "../components/Dashboard/MainPageDashboard";
import sx from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={sx.dashboard}>
      <Header />
      <MainPageDashboard />
      <Footer />
    </div>
  );
}

export default Dashboard;
