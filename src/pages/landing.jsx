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
  const news = "Our presale starts soon on May 26th. Early investors would earn over 20% profits. Once the presale is over, PayrLink team is going to host an airdrop event. The more tokens you have, the higher your chances of winning the airdrop. Join our community and stay tuned! - PayrLink Core Team -";
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
              <Button variant="light" className="btn_white mr-3">
                ESCROW SERVICE
              </Button>
              <Button variant="light" className="btn_white mr-3">
                ARBITRATION CENTER
              </Button>
              <Button variant="light" className="btn_white" onClick={() => {window.open("https://farming.payrlink.com", "_blank")}}>
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

