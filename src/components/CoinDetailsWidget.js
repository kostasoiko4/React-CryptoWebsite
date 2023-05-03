import React, {useState} from 'react'
import ReactDOM from "react-dom";

import { Row, Col, Image, Card, Accordion } from 'react-bootstrap';
import "../styles/accordion.scss"

const CoinDetailsWidget = ({
    id,
    name,
    symbol,
    rank,
    image,
    price,
    description,
    priceChange24h,
    priceChangePercentage24h,
    priceChangePercentage7d,
    priceChangePercentage14d,
    priceChangePercentage30d,
    priceChangePercentage60d,
    priceChangePercentage200d,
    priceChangePercentage1y,
    high24h,
    low24h
}) => {
    return (
        <>
            <Card variant="light" className="hover-state rounded-0 rounded-top py-2" style={{backgroundColor: "#111"}} >
                <Card.Body className="align-items-center flex-wrap flex-lg-nowrap py-0">
                    <Row className="justify-content-md-start">
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <Card style={{marginTop: "0.5rem", height: "3rem", width: "fit-content"}}>
                                <h4 style={{color: "#333", margin: "0.5rem"}}>Rank:{rank}</h4>
                            </Card>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <Image src={image} style={{marginTop: "0.5rem", marginLeft: "0.5rem"}}/>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={4}>
                            <div style={{marginLeft: "-2rem"}}>
                                <h4 style={{color: "#DDD"}}>{name}</h4>
                                <h6 style={{color: "#999"}}>{symbol.toUpperCase()}</h6>
                            </div>
                        </Col>
                         <Col xs={12} sm={1} lg={1} xl={2}>
                            <h4 style={{color: "#DDD"}}>Price</h4>
                            <h5 style={{color: "#AAA", fontWeight: "400"}}>${price}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={2}>
                            <div>
                                <h4 style={{color: "#DDD"}}>24H High</h4>
                                <h5 style={{color: "#AAA", fontWeight: "400"}}>${high24h}</h5>
                            </div>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={2}>
                            <div>
                                <h4 style={{color: "#DDD"}}>24H Low</h4>
                                <h5 style={{color: "#AAA", fontWeight: "400"}}>${low24h}</h5>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Accordion variant="dark" flush defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header"><h5 style={{fontWeight: "400"}}>{name} Description</h5></Accordion.Header>
                        <Accordion.Body>
                            {/* might be a vulnerability, fix needed */}
                            <p dangerouslySetInnerHTML={{__html:description}} style={{color: "#999"}}></p>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Card border="bottom" className="hover-state rounded-0 rounded-top py-2" style={{backgroundColor: "#111"}} >
                <Card.Body className="align-items-center flex-wrap flex-lg-nowrap py-0">
                    <Row className="justify-content-md-start">
                        <Col xs={12} sm={1} lg={1} xl={3}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>24H Change</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={2}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>Change %</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>24H</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>7D</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>14D</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>30D</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>60D</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>200D</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: "#DDD", fontWeight: "400"}}>1Y</h5>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="hover-state rounded-0 rounded-top py-2" style={{backgroundColor: "#111"}} >
                <Card.Body className="align-items-center flex-wrap flex-lg-nowrap py-0">
                    <Row className="justify-content-md-start">
                        <Col xs={12} sm={1} lg={1} xl={5}>
                            <h5 style={{color: "#AAA", fontWeight: "400"}}>${priceChange24h.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage24h) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage24h.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage7d) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage7d.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage14d) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage14d.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage30d) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage30d.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage60d) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage60d.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage200d) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage200d.toFixed(3)}</h5>
                        </Col>
                        <Col xs={12} sm={1} lg={1} xl={1}>
                            <h5 style={{color: (priceChangePercentage1y) > 0 ?'#25cf1f' : '#cf2b1f', fontWeight: "400"}}>{priceChangePercentage1y.toFixed(3)}</h5>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default CoinDetailsWidget