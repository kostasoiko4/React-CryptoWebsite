import React, { useState } from "react"
import { Col, Image, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { Routes } from "../routes";

const CoinCardWidget = (props) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const { id, index, image, name, symbol, price, high_24h, low_24h, price_change_percentage_24h } = props  
  
    if (redirectToReferrer) {
      return <Redirect to={{pathname: Routes.CoinPage.path, state: { id: id }}} />;
    }
  
    return (
      <Card border="bottom" className="hover-state rounded-0 rounded-top py-2" style={{backgroundColor: "#111"}} >
        <Card.Body className="d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0">
          <Col xs={10} sm={1} lg={1} xl={1} className="d-xl-inline-flex align-items-center">
            <h5 style={{color: "#888"}}>#{index}</h5>
            <Image rounded src={image} className="avatar-sm" style={{width: "50px", height: "50px", marginLeft: "3.3rem", position:"absolute"}}/>
          </Col>
          <Col xs={10} lg={6} className="px-0 mb-4 mb-md-0" style={{cursor: "pointer"}} onClick={e => setRedirectToReferrer(true)}>
            <div>
              <h5 style={{color: "#DDD", marginLeft: "1rem"}}>{name}</h5>
            </div>
            <div>
              <span className={"fw-normal text-gray"} style={{color: "#AAA", marginLeft: "1rem"}}>
                {symbol.toUpperCase()}
              </span>
            </div>
          </Col>
          <Col xs={10} sm={1} lg={1} xl={1} className="d-none d-lg-block d-xl-inline-flex align-items-start ms-lg-auto text-right justify-content-start px-md-0">
            <div style={{margin: "5px"}}>
              <span className={"fw-normal text-gray"}>
                <h6 style={{color: "#DDD", fontWeight: "400"}}>Price</h6>
                <h6 style={{color: "#AAA", textAlign: "start"}}>${price}</h6>
              </span>
            </div>
            </Col>
            <Col xs={10} sm={1} lg={1} xl={1} className="d-none d-lg-block d-xl-inline-flex align-items-start ms-lg-auto text-right justify-content-start px-md-0">
            <div style={{margin: "5px"}}>
              <span className={"fw-normal text-gray"}>
                <h6 style={{color: "#DDD", fontWeight: "400"}}>Highest 24h</h6>
                <h6 style={{color: "#AAA", textAlign: "start"}}>${high_24h}</h6>
              </span>
            </div>
            </Col>
            <Col xs={10} sm={1} lg={1} xl={1} className="d-none d-lg-block d-xl-inline-flex align-items-start ms-lg-auto text-right justify-content-start px-md-0">
            <div style={{margin: "5px"}}>
              <span className={"fw-normal text-gray"}>
                <h6 style={{color: "#DDD", fontWeight: "400"}}>Lowest 24h</h6>
                <h6 style={{color: "#AAA", textAlign: "start"}}>${low_24h}</h6>
              </span>
            </div>
          </Col>
          <Col xs={10} sm={1} lg={1} xl={1} className="d-none d-lg-block d-xl-inline-flex align-items-start ms-lg-auto text-right justify-content-start px-md-0">
            <div style={{margin: "5px"}}>
              <span className={"fw-normal text-gray"}>
                <h6 style={{color: "#DDD", fontWeight: "400"}}>Change 24h</h6>
                <h6 style={{color: (price_change_percentage_24h) > 0 ?'#25cf1f' : '#cf2b1f', textAlign: "start"}}>{price_change_percentage_24h}%</h6>
              </span>
            </div>
          </Col>
        </Card.Body>
      </Card>
    );
  };

  export default CoinCardWidget