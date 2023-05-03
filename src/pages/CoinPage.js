import React , { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getCoin} from "../redux/actions/coinActions";
import { Redirect } from "react-router-dom";
import { Routes } from "../routes";

import { Col, Row, Image, Button, Spinner } from "react-bootstrap";
import { ChevronLeftIcon } from "@heroicons/react/solid";

import CoinDetailsWidget from "../components/CoinDetailsWidget"

import logo from "../assets/logo.png"

const CoinPage = ({
  coinReducerProp: { currentCoin, coinLoading },
  getCoin
}) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const location = useLocation();
  const id = location.state.id

  useEffect(() => {
    getCoin(id)
  },[])

  if (redirectToReferrer) {
    return <Redirect to={{pathname: Routes.HomePage.path}} />;
  }

  console.log("Coin:", currentCoin)

  return (
    <>
      <Row className="justify-content-md-center mb-4">
          <Button 
            variant="light" 
            className="rounded-circle" 
            style={{position: "absolute", top:"1rem", left:"1rem", backgroundColor: "inherit", width: "50px", height: "50px"}}
            onClick={e=> setRedirectToReferrer(true)}
            >
            <ChevronLeftIcon className="icon icon-sm" style={{height: "1.5rem", color:"white"}}/>
          </Button>
        <Col className="col-auto">
          <Image src={logo} style={{height: "200px", width: "400px", marginTop: "2rem"}} />
        </Col>
      </Row>

      <Row className="justify-content-md-center mb-4">
        {coinLoading ? (
          <Col className='col-auto'><Spinner style={{color: "white", height: "100px", width: "100px", marginTop: "10rem"}}/></Col>
          ) : (
            <Col xs={12} lg={8}>
              <CoinDetailsWidget {...currentCoin} />
            </Col>
          )}
      </Row>
    </>
  )
}

const mapStateToProps = (state) => ({
  coinReducerProp: state.coinReducer
})

export default connect(mapStateToProps, {
  getCoin,
})(CoinPage)