import React from 'react';
import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import './App.css';
import {NewPassword} from "./UniqComponents/aNewPassword/NewPassword";
import {FourZeroFourError} from "./UniqComponents/four_zero_four_error/FourZeroFourError";
import {Login} from "./UniqComponents/login/Login";
import {Navigate} from "react-router-dom";
import {PasswordRepair} from "./UniqComponents/passwordRepair/PasswordRepair";
import {Registration} from "./UniqComponents/registration/Registration";
import {TestComponent} from "./UniqComponents/testComponent/TestComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/anewpassword" element={<NewPassword/>}/>
        <Route path="/404" element={<FourZeroFourError/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/passwordrepair" element={<PasswordRepair/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/test" element={<TestComponent/>}/>
        <Route path="*" element={<Navigate to="/404"/>}/>
      </Routes>
    </div>
  );
}

export default App;
