import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getCoinsMarkets} from "../redux/actions/coinActions";

import { Col, Row, Image, Button, ButtonGroup, Spinner } from "react-bootstrap";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import CoinCardWidget from "../components/CoinCardWidget"

import logo from "../assets/logo.png"

const HomePage = ({
  coinReducerProp: { coinsMarkets, coinsLoading },
  getCoinsMarkets
}) => {
  const [pageIndex, setPageIndex] = useState(0)

  useEffect(() => {
    getCoinsMarkets(pageIndex+1)
  }, [pageIndex])

  return (
    <>
      <Row className="justify-content-md-center mb-4">
        <Col className="col-auto">
          <Image src={logo} style={{height: "200px", width: "400px", marginTop: "2rem"}} />
        </Col>
      </Row>

      <Row className="justify-content-md-center mb-4">
        {coinsLoading ? (
          <Col className='col-auto'><Spinner style={{color: "white", height: "100px", width: "100px", marginTop: "10rem"}}/></Col>
          ) : (
          <Col xs={12} lg={8}>
            <div className="task-wrapper shadow-sm rounded">
              {coinsMarkets?.map((coin, index) => 
                <CoinCardWidget
                  {...coin}
                  key={coin.id}
                  index={(pageIndex*100) + index+1}                  
                />
              )}

              <Row className="d-flex align-items-center p-4">
                <Col xs={7} className="mt-1">
                  <h6 style={{color: "#DDD"}}>Showing {(pageIndex*100)+1} - {((pageIndex+1)*100 < 10715) ? (pageIndex+1)*100 : 10715} of 10,715</h6>
                </Col>
                <Col xs={5}>
                  <ButtonGroup className="float-end">
                    <Button variant="light" disabled={pageIndex === 0} onClick={e => {pageIndex > 0 && setPageIndex(pageIndex-1)}}>
                      <ChevronLeftIcon className="icon icon-sm" style={{height: "1.5rem"}}/>
                    </Button>
                    <Button variant="light" disabled={(pageIndex+1)*100 > 10715} onClick={e => {(pageIndex+1)*10 < coinsMarkets.length && setPageIndex(pageIndex+1)}}>
                      <ChevronRightIcon className="icon icon-xs" style={{height: "1.5rem"}}/>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </div>
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
  getCoinsMarkets
})(HomePage)