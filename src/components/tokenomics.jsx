import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Cloud1 from "../assets/cloud1.png";
import { Doughnut } from "react-chartjs-2";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";
import Ellipse5 from "../assets/Ellipse5.png";
import Ellipse6 from "../assets/Ellipse6.png";
import Ellipse7 from "../assets/Ellipse7.png";
import Cloud from "../assets/cloud.png";

const labels = [
  "Token Sales",
  "Team",
  "Advisors",
  "Staking/Farming Rewards",
  "Marketing Funds",
  "Exchange Liquidity",
  "Development Funds"
];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: [
        "#3266CC",
        "#D7350F",
        "#FF9600",
        "#049E1C",
        "#910792",
        "#0398C3",
        "#FF9600",
      ],
      borderColor: [
        "#3266CC",
        "#D7350F",
        "#FF9600",
        "#049E1C",
        "#910792",
        "#0398C3",
        "#FF9600",
      ],
      data: [38, 7, 5, 19, 8, 15, 8],
    },
  ],
};

const data1 = [
  {
    icon: Ellipse1,
    perc: "38%",
    name: "Token Sales",
  },
  {
    icon: Ellipse2,
    perc: "7%",
    name: "Team",
  },
  {
    icon: Ellipse3,
    perc: "5%",
    name: "Advisors",
  },
  {
    icon: Ellipse4,
    perc: "19%",
    name: "Staking/Farming Rewards",
  },
  {
    icon: Ellipse5,
    perc: "8%",
    name: "Marketing Funds",
  },
  {
    icon: Ellipse6,
    perc: "15%",
    name: "Exchange Liquidity",
  },
  {
    icon: Ellipse7,
    perc: "8%",
    name: "Development Funds",
  },
];

const icoData = [
  {
    raised: "< 50 ETH",
    bonus: "3.4% ~ 4.3%",
  },
  {
    raised: "< 100 ETH",
    bonus: "2.1% ~ 3.4%",
  },
  {
    raised: "< 200 ETH",
    bonus: "1.1% ~ 2.1%",
  },
  {
    raised: "< 300 ETH",
    bonus: "0% ~ 1.1%",
  },
];

const tokenomics = () => {
  return (
    <>
        <Row className=" justify-content-center bg_tokenomics">
          <Col md="12" className="px-0">
            <img src={Cloud} alt="" width="100%" />
          </Col>
          <Col xl="12">
            <h1 className="text-white font-weight-bold pb-3 pb-xl-5 text-center">
              Tokenomics
            </h1>
          </Col>
          <Col lg={10} xl={10} className="px-xl-5 mb-5">
            <div className="chart_sec p-3 pb-5 p-xl-5 h-100" style={{backgroundColor: 'transparent'}}>
              <div className="chart_container mx-auto py-5">
                <Doughnut
                  id="chart-area"
                  data={data}
                  width={360}
                  height={360}
                  options={{
                    maintainAspectRatio: false,
                    cutoutPercentage: 70,
                    tooltips: {
                      enabled: true,
                    },
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      datalabels: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>
              <table className="text-white mx-auto">
                {data1.map((e) => (
                  <tr>
                    <td>
                      <img src={e.icon} alt="" className="mb-2 mr-3" height={20} />
                    </td>
                    <td>
                      <h5 className="mb-2 mr-5 text-right">{e.perc}</h5>
                    </td>
                    <td>
                      <h5 className="mb-2 text-white-50">{e.name}</h5>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </Col>
          {/* <Col lg={10} xl={5} className="px-xl-5 mb-5 tokenomics_side">
            <div className="chart_sec mb-5 text-white text-center trans">
              <div className="lable_top d-flex justify-content-center">
                <h4 className="font-weight-bold py-2 rounded-bottom">
                  PRIVATE-SALE
                </h4>
              </div>
              <div>
                <h4 className="my-4"></h4>
                <div className="round_div mx-auto my-5">
                  <h1>10%</h1>
                  <h5>Special Bonus</h5>
                </div>
                <div className="pb-4">
                  <span className="price_tag px-5 py-2">1 ETH = 212,000 PAYR</span>
                </div>
                <div className="pb-5">
                  <Button 
                    className="sale_button px-5 py-2"
                    onClick={() => {window.open("https://forms.gle/bWLGZde6XJ9cPzHq8", "_blank")}}
                    disabled
                  >Ended</Button>
                </div>
              </div>
            </div>
            <div className="chart_sec text-white text-center">
              <div className="lable_top d-flex justify-content-center trans">
                <h4 className="font-weight-bold py-2 rounded-bottom">PUBLIC-SALE</h4>
              </div>
              <div>
                <h4 className="my-4">Target – to Raise 125 ETH</h4>
                <div className="pb-4 mt-5">
                  <span className="price_tag px-5 py-2">1 ETH = 192,000 PAYR</span>
                </div>
                <div className="pb-5">
                  <Button 
                    className="sale_button px-5 py-2"
                    onClick={() => {window.open("/sale", "_blank")}}
                  >Go to Page</Button>
                </div>             
              </div>
            </div>
          </Col> */}
          <Col xl="12" className="px-0">
            <img src={Cloud1} alt="" width="100%" />
          </Col>
        </Row>
      </>
  );
}

export default tokenomics;
