import React from "react";
import { Row, Col } from "react-bootstrap";
import Linkdin from "../assets/linkdin.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";

const teamData = [
  {
    name: "Maxsim Boiko J.",
    occupation: "(Founder & CEO)",
    linkdin: "https://www.linkedin.com/in/maxsim-boiko-jin-1877b7205/",
    github: "https://github.com/leonboripgs",
    discreption: "Maxsim Boiko is highly motivated Founder of PayrLink with a combined experience in blockchain, which includes leadership, program and organizational development. Specialized expertise in the development of innovative Defi and he is pushing Payrlink to the goal of next generation Escrow."
  },
  {
    name: "Jason M.",
    occupation: "(CTO)",
    github: "https://github.com/IntelMin",
    discreption: "Jason has spent multiple years building up blockchain infrastructure for several organizations with combined experience in FinTech, Data Science, Software Engineering, and Blockchain Industry."
  },
  {
    name: "Blake L.",
    occupation: "(CIO & HR)",
    linkdin: "https://www.linkedin.com/in/blake-lin-aaa876203/",
    github: "https://github.com/magic990619",
    discreption: "Blake is the Chief Information Officer and Hiring Manager at PayrLink with more than six years of experience with creating and promoting blockchain projects. Former Lead Dev at Codiant, Contributor at Yam, and community builder. Blake connects people, combining his technical and business background in order to push ideas to success."
  },
  {
    name: "Gabriel M.",
    occupation: "(Senior Full-Stack Developer)",
    github: "https://github.com/gabriel-reine-13",
    discreption: "A professional full-stack blockchain engineer. Gabriel has become quite a familiar face in the crypto community from helping several top projects with management, advisory, and dev work."
  },
  
];

const team = () => {
  return (
    <>
        <Row className="app_secondery  px-5">
          <Col md="12" xl="12">
            <h1 className="text-white font-weight-bold mb-5 pb-3 pb-md-5 text-center">
              Our Team
            </h1>
          </Col>
        </Row>
        <Row className="px-md-5 app_secondery text-white justify-content-center bg_team">
          <Col xl={10}>
            <Row>
              {teamData.map((e) => (
                <Col md="6" xl="4" className="my-3">
                  <div className="card_div h-100">
                    <h3 className="font-weight-bold">{e.name}</h3>
                    <h5 className="text-white-50">{e.occupation}</h5>
                    <div className="d-flex my-4">
                      {e.linkdin && 
                        <div className="icon_over mr-3">
                            <a href={e.linkdin}>
                              <img src={Linkdin} width="15" alt="" />
                            </a>
                        </div>
                      }
                      {e.github && 
                        <div className="icon_over mr-3">
                          <a href={e.github}>
                            <img src={Github} width="18" alt="" />
                          </a>
                        </div>
                      }
                      {e.twitter && 
                        <div className="icon_over mr-3">
                          <a href={e.twitter}>
                            <img src={Twitter} width="15" alt="" />
                          </a>
                        </div>
                      }
                      {e.telegram && 
                        <div className="icon_over mr-3">
                          <a href={e.telegram}>
                            <img src={Telegram} width="15" alt="" />
                          </a>
                        </div>
                      }
                      {e.discord && 
                        <div className="icon_over mr-3">
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
      </>
  );
}

export default team;
