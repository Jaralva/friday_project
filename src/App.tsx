import React from 'react';
import logo from './logo.svg';
import {Routes, Route, NavLink} from "react-router-dom";
import './App.css';
import {NewPassword} from "./UniqComponents/aNewPassword/NewPassword";
import {FourZeroFourError} from "./UniqComponents/four_zero_four_error/FourZeroFourError";
import {Login} from "./UniqComponents/login/Login";
import {Navigate} from "react-router-dom";
import {PasswordRepair} from "./UniqComponents/passwordRepair/PasswordRepair";
import {Registration} from "./UniqComponents/registration/Registration";
import {TestComponent} from "./UniqComponents/testComponent/TestComponent";
import {Profile} from "./UniqComponents/profile/Profile";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to={'/anewpassword'}> New Password </NavLink>
      </div>
      <div>
        <NavLink to={'/404'}> Error: 404 </NavLink>
      </div>
      <div>
        <NavLink to={'/login'}> Login </NavLink>
      </div>
      <div>
        <NavLink to={'/passwordrepair'}> Password repair </NavLink>
      </div>
      <div>
        <NavLink to={'/registration'}> Registration </NavLink>
      </div>
      <div>
        <NavLink to={'/test'}> Test </NavLink>
      </div>

      {/*<NewPassword/>*/}
      {/*<FourZeroFourError/>*/}
      {/*<Login/>*/}
      {/*<PasswordRepair/>*/}
      {/*<Profile/>*/}
      {/*<Registration/>*/}
      {/*<TestComponent/>*/}


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
