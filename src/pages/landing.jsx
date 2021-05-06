import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../assets/logo.png";
import Welcome from "../components/welcome";
import About from "../components/about";
import Feature from "../components/features";
import Roadmap from "../components/roadmap";
import Tokenomics from "../components/tokenomics";
import Team from "../components/team";
import Advidser from "../components/adviser";
import Footer from "../components/footer";
import Sticky from 'react-sticky-el';

const landing = () => {
  return (
      <Container fluid className="main_layout">
        <Row className="header py-4 px-md-5">
          <Col
            xl={12}
            className="d-md-flex justify-content-between align-items-center"
          >
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="d-flex">
              <Button
                variant="link"
                className="text_white font-weight-bold mr-2"
              >
                Apps
              </Button>
              <Button variant="light" className="btn_white mr-3">
                ESCROW SERVICE
              </Button>
              <Button variant="light" className="btn_white mr-3">
                ARBITRATION CENTER
              </Button>
              <Button variant="light" className="btn_white">
                FARM
              </Button>
            </div>
          </Col>
        </Row>
        <Sticky stickyClassName="z_1000">
          <Row>
            <Col xl="12" className="marquee_class">
              <marquee>
                <h6 className="text-white py-2 mb-0">
                  News of the day ………….. News of the day ………….. News of the day
                  ………….. News of the day ………….. News of the day ………….. News of the
                  day ………….. News of the day ………….. News of the day ………….. News of
                  the day ………….. News of the day ………….. News of the day …………..
                  News of the day ………….. News of the day ………….. News of the day
                  ………….. News of the day ………….. News of the day ………….. News of the
                  day …………..{" "}
                </h6>
              </marquee>
            </Col>
          </Row>
        </Sticky>
        <Welcome />
        <About />
        <Feature />
        <Roadmap />
        <Tokenomics />
        <Team />
        <Advidser />
        <Footer />
      </Container>
  );
}

export default landing;

