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
  const news = "🚀Public sale starts on June 4th 00:00AM (UTC +0). Please visit the public sale page to buy PAYR. Join our community and stay tuned! - PayrLink Core Team -"
  return (
      <Container fluid className="main_layout">
        <Row className="header py-4 px-md-5">
          <Col
            xl={12}
            className="d-md-flex justify-content-between align-items-center  text-center text-md-left"
          >
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="d-md-flex text-center text-md-right">
              <Button
                variant="link"
                className="text_white font-weight-boldmr-2 mr-md-3 my-2 my-md-0 px-2"
              >
                Apps
              </Button>
              <Button variant="light" className="btn_white mr-2 mr-md-3 my-2 my-md-0">
                ESCROW SERVICE
              </Button>
              <Button variant="light" className="btn_white mr-2 mr-md-3 my-2 my-md-0">
                ARBITRATION CENTER
              </Button>
              <Button variant="light" className="btn_white">
                FARM
              </Button>
            </div>
          </Col>
        </Row>
        {
          news &&
            <Sticky stickyClassName="z_1000">
              <Row>
                <Col xl="12" className="marquee_class">
                  <marquee>
                    <h6 className="text-white py-2 mb-0">
                      {news}
                    </h6>
                  </marquee>
                </Col>
              </Row>
            </Sticky>
        }
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

