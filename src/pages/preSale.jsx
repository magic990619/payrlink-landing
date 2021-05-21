import React, { useState, useCallback } from "react";
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";
import { useWallet } from 'use-wallet';
import LoaderSpinner from "react-loader-spinner";

import Logo from "../assets/logo.png";
import Footer2 from "../components/footer2";
import ETH from "../assets/eth.svg";
import Wallet from "../assets/walletSmall.svg";
import TimeCounter from "../components/timeCounter";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ConectWallet from "../components/conectWallet";
import { Link } from "react-router-dom";
import * as utils from '../blockchain/utils';
import usePayr from '../hooks/usePayr';
import useAllowance from "../hooks/useAllowance";
import useAccountInfo from "../hooks/useAccountInfo";
import useSalesData from "../hooks/useSalesData";

const PreSale = (props) => {

  const [modalShow, setModalShow] = useState(false);
  const [ethAmount, setEthAmount] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [requestedApproval, setRequestedApproval] = useState(false);
  const [requestedContribute, setRequestedContribute] = useState(false);
  const [requestedWithdraw, setRequestedWithdraw] = useState(false);
  const {account} = useWallet();
  const salesData = useSalesData();
  const payr = usePayr();
  const allowance = useAllowance();
  const {accountLoading, ethBalance, payrAmount} = useAccountInfo();
  
  const presaleStatusText = (status) => {
    switch (status) {
      case 1: return "Starts in";
      case 2: return "Ends in";
      case 3: return "Ended";
      default: return "is Coming soon";
    }
  }
  
  const presaleTargetTime = (data) => {
    switch (data.status) {
      case 1: return data.startTime;
      case 2: return data.endTime;
      case 3: return 0;
      default: return 0;
    }
  }

  const presalePriceText = (status) => {
    switch (status) {
      case 1: return "Initial Price";
      case 2: return "Current Price";
      case 3: return "Ending Price";
      default: return "Initial Price";
    }
  }

  const handleAmountChange = (e) => {
    const newValue = e.target.value;

    if (isNaN(newValue))
      return;

    setEthAmount(newValue);
  }

  const handleMaxClick = () => {
    setEthAmount(ethBalance);
  }

  const handleDisconnect = () => {
    payr.disconnect();
  };

  const handleApprove = useCallback(async () => {
    setRequestedApproval(true);
    const txHash = await payr.approve();
    if (!txHash) {
      setErrMsg("Approve Error!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    }
    setRequestedApproval(false);
  }, [payr, setRequestedApproval]);


  const handleContribute = useCallback(async () => {
    if (ethAmount === "" || isNaN(ethAmount) || Number(ethAmount) <= 0) {
      setErrMsg("Invalid amount.");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
      return;
    }
    if (Number(ethAmount) > Number(ethBalance)) {
      setErrMsg("Insufficient balance.");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
      return;
    }

    setRequestedContribute(true);
    const txHash = await payr.invest(ethAmount);
    if (!txHash) {
      setErrMsg("Contribute Error!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    }
    setRequestedContribute(false);
  }, [payr, ethAmount, ethBalance, setErrMsg, setRequestedContribute]);

  const handleWithdraw= useCallback(async () => {
    setRequestedWithdraw(true);
    const txHash = await payr.withdraw();
    if (!txHash) {
      setErrMsg("Withdraw Error!");
      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    }
    setRequestedWithdraw(false);
  }, [payr, setRequestedWithdraw]);

  return (
    <Container fluid className="main_layout">
      <Row className="header py-4 px-md-5">
        <Col
          xl={12}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <Link to="/"><img src={Logo} alt="" /></Link>
          </div>
          {!account ? (
            <Button
              variant="light"
              className="btn_white mx-md-3"
              onClick={() => setModalShow(true)}
            >
              Connect Wallet
            </Button>
          ) : (
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                className="btn_white"
                id="dropdown-basic"
              >
                <img src={Wallet} alt="" className="mr-1" />
                {utils.formatAddress(account)}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={handleDisconnect}>
                  Disconnect
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <ConectWallet
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
      {
        salesData?
          <Row className="justify-content-center pb-5 bg_presale">
            <Col sm={12} md={12} lg={9} xl={7} className="">
              <div className=" position-relative pre_block px-5 text-center">
                <div className="app_secondery-70 pt-5">
                  <h1 className="text-white display-4 font-weight-bold py-3 mb-5">
                    Public Sale
                  </h1>
                </div>
              </div>

              <div className="py-3 counter_block mb-0 pb-0 w-auto">
                <h2 className="text-white text-center">{presaleStatusText(salesData.status)}</h2>
                <TimeCounter
                  timeTillDate={presaleTargetTime(salesData)}
                  status={salesData.status}
                />
              </div>
            </Col>
            <Col sm={12} md={12} lg={9} xl={7} className="pb-3 my-4 my-xl-3">
              <Row className="px-4">
                <Col
                  sm={12}
                  md={12}
                  lg={account && salesData.status > 1?6:12}
                  xl={account && salesData.status > 1?6:12}
                  className="px-5 text-center text-white "
                >
                  <div
                    className="border_radius py-3 app_secondery-70 mb-5 mb-lg-0"
                  >
                    <div
                      style={{ width: 140, height: 140 }}
                      className="mx-auto mb-5 mb-xl-4 mt-3"
                    >
                      <CircularProgressbar
                        value={salesData.percentage}
                        text={`${salesData.percentage}%`}
                        styles={buildStyles({
                          textSize: "16px",
                          pathColor: `white`,
                          textColor: "white",
                          trailColor: "rgba(255, 255, 255, 0.3)",
                        })}
                      />
                    </div>

                    <h3 className="text-center">{salesData.amountRaised} ETH / {salesData.fundingGoal}</h3>
                    <div className="w-fit-content mx-auto">
                      <h6 className="text-left mb-0 price-title">{presalePriceText(salesData.status)}</h6>
                      <h5 className="text-left">1 ETH = {salesData.currentPrice} PAYR</h5>
                    </div>
                  </div>
                </Col>
                {
                  account && salesData.status > 1 &&
                    <Col
                      sm={12}
                      md={12}
                      lg={6}
                      xl={6}
                      className="px-5 h-auto"
                    >
                      <div className="app_secondery-70 border_radius p-3 p-md-4 text-white h-100 flex-div">
                        {
                          accountLoading ?
                            <LoaderSpinner
                              className="account-loading"
                              type="ThreeDots"
                              color="white"
                              height={30}
                              width={50}
                            />
                          :
                            <div className="w-100">
                              <div className="d-md-flex justify-content-md-between">
                                <h4 className="text-center mt-2">Bought</h4>
                                <h4 className="text-center mt-2">{payrAmount} PAYR</h4>
                              </div>
                              {
                                salesData.status !== 3 && 
                                  <div
                                    className="bg_gray d-flex align-items-center m py-1 px-3 rounded my-3 ml-auto"
                                    style={{ width: "fit-content" }}
                                  >
                                    <img src={ETH} alt="" className="mr-2" />
                                    <h3 className="mb-0">ETH</h3>
                                  </div>
                              }
                              {
                                errMsg &&
                                  <div className="err-msg">
                                    {errMsg}
                                  </div>
                              }
                              {
                                salesData.status === 3 ? 
                                  payrAmount > 0 && (
                                    requestedWithdraw?
                                      <div className="mt-3">
                                        <Button
                                          variant="light"
                                          className="btn_white w-fill-available"
                                          disabled
                                        >
                                          Withdrawing...
                                        </Button>
                                      </div>
                                    :
                                      <div className="mt-3">
                                        <Button
                                          variant="light"
                                          className="btn_white w-fill-available"
                                          onClick={handleWithdraw}
                                        >
                                          Withdraw
                                        </Button>
                                      </div>
                                  )
                                : <>
                                  <Form.Control
                                    as="input"
                                    value={ethAmount}
                                    onChange={handleAmountChange}
                                    className="input_bg_gray border-0 py-0 text-right text-white text-large"
                                    style={{height:"38px"}}
                                    disabled={!allowance || requestedApproval || requestedContribute}
                                  />
                                  <h5 className="text-right text-white-50 clickable" onClick={handleMaxClick}>Max: {ethBalance}</h5>
                                  {
                                    allowance?
                                      (
                                        requestedContribute?
                                          <div className="mt-3">
                                            <Button
                                              variant="light"
                                              className="btn_white w-fill-available"
                                              disabled
                                            >
                                              Contributing...
                                            </Button>
                                          </div>
                                        :
                                          <div className="mt-3">
                                            <Button
                                              variant="light"
                                              className="btn_white w-fill-available"
                                              onClick={handleContribute}
                                            >
                                              Contribute
                                            </Button>
                                          </div>
                                      )
                                    : (
                                      requestedApproval?
                                        <div className="mt-3">
                                          <Button
                                            variant="light"
                                            className="btn_white w-fill-available"
                                            disabled
                                          >
                                            Approving...
                                          </Button>
                                        </div>
                                      :
                                        <div className="mt-3">
                                          <Button
                                            variant="light"
                                            className="btn_white w-fill-available"
                                            onClick={handleApprove}
                                          >
                                            Approve
                                          </Button>
                                        </div>
                                    )
                                  }
                                </>
                              }
                              
                              
                            </div>
                        }
                        
                      </div>
                    </Col>
                }
                
              </Row>
            </Col>

            <Col sm={12} md={12} lg={9} xl={7} className="pb-3 my-4 my-xl-3">
              <Row className="px-4">
                <Col sm={12} className="px-3 px-md-5">
                  <div className="app_secondery-70 border_radius p-3 py-md-4 px-md-5 text-white">
                    <h4 className="text-center mt-2">Attention!</h4>
                    <h4 className="font-weight-normal attention-desc">
                      This is an admin message... By contributing you agree to the
                      user terms that this is not an investment and a possible
                      loss of ethereum can occur. PayrLink takes no responsibility for
                      any issues of any kind, you are responsible for your own
                      decision making when minting utility tokens for this
                      project. Any legal or jurisdictional issues are entirely
                      your own and you must make sure you do your due diligence
                      before hand. Thank you from the PayrLink project.
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        :
          <Row className="justify-content-center pb-5 bg_presale presale-loading-bg">
            <div className="presale-loading">
              <LoaderSpinner
                type="ThreeDots"
                color="white"
                height={50}
                width={70}
              />
              <p className="loading-text">Loading...</p>
            </div>
          </Row>
      }
      <Footer2 />
    </Container>
  );
}

export default PreSale;
