import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import Feature1 from "../assets/feature1.png";
import Feature2 from "../assets/feature2.png";
import Feature3 from "../assets/feature3.png";
import Wallet from "../assets/wallet.svg";
import Transfer from "../assets/transfer.svg";
import Lock from "../assets/lock.svg";
import Line from "../assets/line.png";

const features = () => {
  return (
    <Row className="px-md-5 px-3 pb-5  justify-content-center bg_features">
    <Col xl="12">
      <h1 className="text-white font-weight-bold my-5 py-5 text-center">
        Our Features
      </h1>
    </Col>

    <Col xl="10" className="text-white px-5">
      <div>
        <Row>
          <Col
            xl="6"
            className="line_side d-none align-items-center d-xl-flex pb-5"
          >
            <div className="featur_img">
              <div className="position-relative">
                <Image src={Feature1} alt="" className="feature_img" />
                <div className="icon_round d-flex justify-content-center align-items-center">
                  <img src={Wallet} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6" className="pb-5">
            <div className="h-100 position-relative d-flex align-items-center">
              <Image
                src={Feature1}
                alt=""
                className="w-25 mr-5 d-none d-xl-none d-md-block"
              />
              <div className="feature_card ml-auto">
                <div className="text-left">
                  <h3 className="text-white font-weight-bold mb-3">
                    Crypto Escrow service
                  </h3>
                  <h5 className="font-weight-normal">
                    Send cryptos to get secured by PayrLink.
                  </h5>
                  <Button
                    variant="light font-weight-bold px-4 "
                    className="mt-4"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <img src={Line}  alt="" className="icon_line d-none d-xl-block" />
            </div>
          </Col>

          <Col
            xl="6"
            className="line_side align-items-center d-none d-xl-flex py-5"
          >
            <div className="h-100 position-relative d-flex align-items-center">
              <Image
                src={Feature2}
                alt=""
                className="w-25 mr-5 d-none d-xl-none d-md-block"
              />
              <div className="feature_card mr-auto">
                <div className="text-xl-right pr-xl-5 mr-xl-4">
                  <h3 className="text-white font-weight-bold mb-3">
                    Decentralized Arbitration
                  </h3>
                  <h5 className="font-weight-normal">
                    The recipient's address is protected by ZKP scheme, so
                    that no one can track, even PayrLink.
                  </h5>
                  <h5 className="font-weight-normal">
                    All the transactions are managed in a private manner by
                    PayrLink.
                  </h5>
                  <Button
                    variant="light font-weight-bold px-4 "
                    className="mt-4"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col
            xl="6"
            className="align-items-center d-flex d-xl-none py-5"
          >
            {/* <div className="position-relative featur_img">
                            <div>
                                <Image src={Feature2} alt=""  className="feature_img" />
                                <div className="icon_round d-flex justify-content-center align-items-center">
                                    <img src={Transfer} />
                                </div>
                            </div>
                        </div> */}
            <div className="h-100 position-relative d-flex align-items-center">
              <Image
                src={Feature2}
                alt=""
                className="w-25 mr-5 d-none d-xl-none d-md-block"
              />
              <div className="feature_card mr-auto">
                <div className="text-xl-right pr-xl-5 mr-xl-4">
                  <h3 className="text-white font-weight-bold mb-3">
                    Decentralized Arbitration
                  </h3>
                  <h5 className="font-weight-normal">
                    The recipient's address is protected by ZKP scheme, so
                    that no one can track, even PayrLink.
                  </h5>
                  <h5 className="font-weight-normal">
                    All the transactions are managed in a private manner by
                    PayrLink.
                  </h5>
                  <Button
                    variant="light font-weight-bold px-4 "
                    className="mt-4"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col xl="6" className="py-5 d-none d-xl-flex">
            <div className="h-100 position-relative d-flex align-items-center">
              <div className="feature_card ml-auto">
                <div className="position-relative ">
                  <div>
                    <Image
                      src={Feature2}
                      alt=""
                      className="feature_img_right w-100"
                    />
                    <div className="icon_round_left1 d-flex justify-content-center align-items-center">
                      <img src={Transfer}  alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <img src={Line}  alt="" className="icon_line d-none d-xl-block" />
            </div>
          </Col>

          <Col
            xl="6"
            className="line_side d-none align-items-center d-xl-flex py-5"
          >
            <div className="position-relative featur_img">
              <div>
                <Image src={Feature3} alt="" className="feature_img" />
                <div className="icon_round d-flex justify-content-center align-items-center">
                  <img src={Lock}  alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6" className="py-5">
            <div className="h-100 position-relative d-flex align-items-center">
              <Image
                src={Feature3}
                alt=""
                className="w-25 mr-5 d-none d-xl-none d-md-block"
              />
              <div className="feature_card ml-auto">
                <div className="text-left">
                  <h3 className="text-white font-weight-bold mb-3">
                    Private Transfer
                  </h3>
                  <h5 className="font-weight-normal">
                    Improved system of borrower's verification.
                  </h5>
                  <h5 className="font-weight-normal">
                    Providing verification services for other services.
                  </h5>
                  <Button
                    variant="light font-weight-bold px-4 "
                    className="mt-4"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <img src={Line}  alt="" className="icon_line d-none d-xl-block" />
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>

  );
}

export default features;
