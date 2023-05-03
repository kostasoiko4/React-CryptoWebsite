import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

import { Col, Row, Navbar, Nav, Image } from "react-bootstrap";

// Pages
import HomePage from "./HomePage";
import CoinPage from "./CoinPage";

// const RouteWithNavbar = ({ component: Component, ...rest }) => {
//     const [loaded, setLoaded] = useState(false);
  
//     useEffect(() => {
//       const timer = setTimeout(() => setLoaded(true), 1000);
//       return () => clearTimeout(timer);
//     }, []);
  
//     const localStorageIsSettingsVisible = () => {
//       return localStorage.getItem('settingsVisible') === 'false' ? false : true
//     }
  
//     const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
//     const toggleSettings = () => {
//       setShowSettings(!showSettings);
//       localStorage.setItem('settingsVisible', !showSettings);
//     }
  
//     return (
//         <Route {...rest} render={props => (
//             <>
//               <Row className="justify-content-md-center main-page">
//                 <Col xs={12} xl={10}>
//                   <main className="content">
//                       <Component {...props} />
//                   </main>
//                 </Col>
//               </Row>
//             </>
//         )}
//         />
//     );
//   };

const Router = () => {
    return (
      <div className="main-page">
        <Switch style={{overflow: "hidden"}}>
            <Route exact path={Routes.HomePage.path} component={HomePage} />
            <Route exact path={Routes.CoinPage.path} component={CoinPage} />
        </Switch>
      </div>
    )
};

export default Router;