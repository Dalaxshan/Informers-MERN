import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import ViewProduct from "./Pages/ViewProduct";
import Register from "./Pages/Register";
import EditInformation from "./Pages/EditInformation";
import EmployeesList from "./Pages/EmployeesList";
import InformerHome from "./Pages/InformerHome";
import CreateInformation from "./Pages/CreateInformation";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/informer" element={< InformerHome />}/>
          <Route exact path="/employeesList" element={<EmployeesList/>} />
          <Route exact path="/viewProduct" element={<ViewProduct />} />
          <Route exact path="/CreateInformation" element={<CreateInformation/>}/>
          <Route exact path="/editInformation/:id" element={<EditInformation/>}/>
          <Route exact path="employeesList/editProfile/:id" element={<EditProfile/>}/>

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
