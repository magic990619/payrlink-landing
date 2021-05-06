import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo1 from "../assets/1.svg";
import logo2 from "../assets/2.svg";
import logo3 from "../assets/3.svg";
import logo4 from "../assets/4.svg";
import logo5 from "../assets/5.svg";

const welcome = () => {
  return (
    <Row className="align-items-center justify-content-center p-3 p-xl-5 intro_section bg_welcome">
      <Col xl={12} className="text-center text-xl-center">
        <div className="mb-3 mb-xl-4">
          <img src={logo1} alt="" className="mr-2" />
          <img src={logo2} alt="" className="mr-2" />
          <img src={logo3} alt="" className="mr-2" />
          <img src={logo4} alt="" className="mr-2" />
          <img src={logo5} alt="" className="mr-2" />
        </div>
        <div className="text-white">
          <h1 className="font font-weight-bold main_title">
            Welcome to <i>PayrLink</i>
          </h1>
          <h4 className="font-weight-normal pb-4">
            Secure Blockchain-Powered Escrow Service with Private
            <br /> Transactions and Decentralized Arbitration.
          </h4>
          <Button
            variant="light"
            className="btn_white mr-md-5 mb-3 mb-xl-0 px-5 font-weight-bold"
          >
            BUY TOKENS
          </Button>
          <Button
            variant="outline-light"
            className="mb-3 mb-xl-0 font-weight-bold px-5"
          >
            WHITEPAPER
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default welcome;
