import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import Twitter from "../assets/twitter.svg";
import Medium from "../assets/medium.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";
import Youtube from "../assets/youtube.svg";
import Logo from "../assets/footer_logo.png";

const footer = () => {
  return (
    <>
      <Row className="p-3 p-md-5 pb-0 justify-content-center app_secondery">
        <Col xl="3" className="mb-5 mr-xl-5 feature_card">
          <div className="contact_us text-white px-3 py-4">
            <h4>Contact Us</h4>
            <Form>
              <Form.Group>
                <Form.Control type="text" className="mb-3" />
                <Form.Control type="text" className="mb-3" />
                <Form.Control
                  type="text"
                  as="textarea"
                  className="mb-3"
                  style={{ minHeight: "100px" }}
                />
              </Form.Group>
              <div className="w-100 d-flex justify-content-end">
                <Button
                  type="submit"
                  variant="light"
                  className="px-5 submit_footer"
                >
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col xl="4" className="ml-xl-5">
          <div className="d-flex justify-content-center">
            <div className="pr-4 d-flex flex-column h-auto">
              <div>
                <h5 className="mb-3">
                  <a className="text-white font-weight-light" href="/Whitepaper.pdf" target="_blank">
                    WHITEPAPER
                  </a>
                </h5>
                <h5 className="mb-3">
                  <a className="text-white font-weight-light" href="https://youtu.be/qC5DbPsap-0" target="_blank">
                    VIDEO
                  </a>
                </h5>
                <h5 className="mb-3">
                  <a className="text-white font-weight-light" href="https://medium.com/@payrlink_official/" target="_blank">
                    ARTICLES
                  </a>
                </h5>
              </div>
              <div className="d-flex mt-auto">
                <a href="/" target="_blank">
                  <img src={Twitter}  alt="" className="mr-2" />
                </a>
                <a href="https://t.me/payrlink" target="_blank">
                  <img src={Telegram}  alt="" className="mr-2" />
                </a>
                <a href="/" target="_blank">
                  <img src={Discord}  alt="" className="mr-2" />
                </a>
                <a href="https://youtu.be/qC5DbPsap-0" target="_blank">
                  <img src={Youtube}  alt="" className="mr-2" />
                </a>
                <a href="https://medium.com/@payrlink_official/" target="_blank">
                  <img src={Medium}  alt="" className="mr-2" />
                </a>
              </div>
            </div>
            <div className="pl-4 border-left">
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  ESCROW SERVICE
                </a>
              </h5>
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  ARBITRATION CENTER
                </a>
              </h5>
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/">
                  FARM
                </a>
              </h5>
              <h5 className="mb-3">
                <a className="text-white font-weight-light" href="/presale" target="_blank">
                  BUY TOKENS
                </a>
              </h5>
            </div>
          </div>
        </Col>
        <Col xl="2" className="text-center mt-5">
          <Image src={Logo}  alt="" fluid />
        </Col>
      </Row>
      <Row>
        <Col xl="12" className="text-white text-center app_secondery">
          <p>Copyright © 2021 PayrLink | All rights reserved.</p>
        </Col>
      </Row>
    </>
  );
};

export default footer;
