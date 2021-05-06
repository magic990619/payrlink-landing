import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useWallet } from 'use-wallet';
import ExcMark from "../assets/exclamation.svg";
import Metamask from "../assets/metamask.svg";
import WConnect from "../assets/wallet-Connect.svg";

function ConectWallet(props) {

  const wallet = useWallet();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (wallet.status === "connected") {
      setError(null);
      props.onHide();
    }

    if (wallet.error)
      setError("Try to connect on Kovan network.");

  }, [wallet]);

  const onChangeWallet = (data) => {
    if (data === 'metamask') {
      wallet.connect("injected");
      localStorage.setItem("walletProvider", "metamask");
    } else if (data === 'walletconnect') {
      wallet.connect("walletconnect");
      localStorage.setItem("walletProvider", "walletconnect");
    }
  };

  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custome_normal_modal"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center text-white font-weight-bold"
        >
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <div className="d-flex">
          <img src={ExcMark}  alt="" className="mr-3" />
          <p className="mb-0 ">
            You are about to input highly sensitive information, please DO NOT
            expose to strangers.
          </p>
        </div>
        {
          error && 
            <div className="error-msg">
              {error}
            </div>
        }
        
        <div className="px-4">
          <Button
            variant="light"
            className="mx-md-3 shadow d-flex align-items-center w-fill-available my-3"
            onClick={() => onChangeWallet("metamask")}
          >
            <img src={Metamask}  alt="" />
            <h3 className="mb-0 ml-3"> Metamask</h3>
          </Button>
          <Button
            variant="light"
            className="mx-md-3 shadow d-flex align-items-center w-fill-available mb-5"
            onClick={() => onChangeWallet("walletconnect")}
          >
            <img src={WConnect}  alt="" />
            <h3 className="mb-0 ml-3"> WalletConnect</h3>
          </Button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
}

export default ConectWallet;
