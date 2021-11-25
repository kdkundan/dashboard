
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from "./components/Calendar";
import SideMenu from './components/SideMenu/SideMenu';

const Dashboard = () => {
  return <h2>Overview</h2>
}

const Messages = () => {
  return <h2>Messages</h2>
}

const PatientList = () => {
  return <h2>Patient List</h2>
}

const Payment = () => {
  return <h2>Payment</h2>
}

function App() {

  const [inactive, setInactive] = useState(false);

  return (
    <>
    <BrowserRouter>
      <SideMenu onCollapse={ (inactive) => {
        console.log(inactive);
        setInactive(inactive);
      } } />
      
      <div className={`container ${inactive ? "inactive" : "" }`} >
        <Routes>
          <Route exact path={'/overview'} element={<Dashboard />} />
          <Route exact path={'/'} element={<Calendar />} />
          <Route exact path={'/payment'} element={<Payment />} />
          <Route exact path={'/patient-list'} element={<PatientList />} />
          <Route exact path={'/messages'} element={<Messages />} />
        </Routes>
      </div>

      

    </BrowserRouter>
    </>
  );
}

export default App;
