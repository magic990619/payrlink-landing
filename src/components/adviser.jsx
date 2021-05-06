import React from "react";
import { Row, Col } from "react-bootstrap";
import Linkdin from "../assets/linkdin.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";

const teamData = [
  {
    name: "Bennett Mason",
    occupation: "(Founder of Stokely Marcus)",
    discreption: "Bennett Mason is one of our great Advisors and he is pushing our project to the great future success. He is one of the DeFi enthusiasm and always passionate for challenges which can change the world."
  }
];

const adviser = () => {
  return (
    <Row className="app_secondery px-2 px-md-5 pb-5 justify-content-center">
        <Col md="12">
          <h1 className="text-white font-weight-bold my-5 pt-md-5 text-center">
            Our Advisors
          </h1>
        </Col>
        <Col md="10" className="adviser_section py-3 py-md-5">
          <Row className="d-flex justify-content-center align-items-center">
            {teamData.map((e) => (
              <Col md="6" xl="4" className="mb-3 mb-md-0">
                <div className="adviser_card text-white">
                  <h3 className="font-weight-bold">{e.name}</h3>
                  <h5 className="text-white-50">{e.occupation}</h5>
                  <div className="d-flex my-4">
                    {e.linkdin && 
                      <div className="icon_over mr-2">
                        <a href={e.linkdin}>
                          <img src={Linkdin} width="15" alt="" />
                        </a>
                      </div>
                      }
                      {e.github && 
                      <div className="icon_over mr-2">
                        <a href={e.github}>
                          <img src={Github} width="15" alt="" />
                        </a>
                      </div>
                      }
                      {e.twitter &&
                      <div className="icon_over mr-2">
                        <a href={e.twitter}>
                          <img src={Twitter} width="15" alt="" />
                        </a>
                      </div>
                      }
                      {e.telegram &&
                      <div className="icon_over mr-2">
                        <a href={e.telegram}>
                          <img src={Telegram} width="15" alt="" />
                        </a>
                      </div>
                      }
                      {e.discord &&
                      <div className="icon_over mr-2">
                        <a href={e.discord}>
                          <img src={Discord} width="15" alt="" />
                        </a>
                      </div>
                      }
                  </div>
                  <h5 className="font-weight-normal mb-5">{e.discreption}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
  );
}


export default adviser;
