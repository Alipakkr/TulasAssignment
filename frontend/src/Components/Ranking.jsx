import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Ranking() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="parent_contaer">
        <div className="cont_one">
          <div className="child_cont_one" data-aos="zoom-out">
            <div className="ranking">
              <img src="../../public/NicePng_trophy-icon-png_1370145.png" />
              <h3>Our Rankings</h3>
              <p>Top Boarding School</p>
            </div>
          </div>
        </div>
        <div className="cont_two">
          <img src="../../public/arrow.png" />
        </div>
        <div className="cont_the">
          <div className="cont_the_child" data-aos="zoom-out">
            <div className="contthe_contnet">
              <h1>#1</h1>
              <h4>In Dehradun</h4>
              <p>
                Co-Educational Boarding School in Dehradun by Education Today
                2020
              </p>
            </div>{" "}
          </div>
          <div className="cont_the_child">
            <div className="cont_the_child" data-aos="zoom-out">
              <div className="contthe_contnet">
                <h1>#2</h1>
                <h4>In Uttarakhand</h4>
                <p>
                  Co-Educational Boarding School in North India by Education
                  Today 2020
                </p>
              </div>{" "}
            </div>
          </div>
          <div className="cont_the_child">
            {" "}
            <div className="cont_the_child" data-aos="zoom-out">
              <div className="contthe_contnet">
                <h1>#4</h1>
                <h4>In India</h4>
                <p>
                  Co-Educational Boarding School in India by Education Today
                  2020
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  background-color: #f8f5f0;
  width: 100%;
  height: 70vh;
  margin-top: 8%;
  display: flex;
  justify-content: center;
  text-align: center;
  .parent_contaer {
    width: 80%;
    margin: auto;
    height: 80%;
    display: flex;
  }
  .cont_one {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .child_cont_one {
    width: 300px;
    height: 290px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 17px;
    border: 2.5px solid #b90124;

    background: #fff;
  }
  .child_cont_one img {
    width: 35%;
  }
  .cont_two img {
    width: 45%;
  }
  .ranking h3 {
    color: #b90124;
    text-align: center;
    font-family: Mirador;
    font-size: 28px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    margin-top: 4px;
  }
  .ranking p {
    color: #000;
    text-align: center;
    font-family: "TT Chocolates";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .cont_two {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cont_the {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cont_the_child {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #b90124;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contthe_contnet h1 {
    color: #fff;
    text-align: center;
    font-family: Miltonian;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.2px;
  }
  .contthe_contnet h4 {
    color: #fff;
    text-align: center;
    font-family: Mirador;
    font-size: 18px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.5px;
  }
  .contthe_contnet p {
    color: #fff;
    text-align: center;
    font-family: "TT Chocolates Trl";
    font-size: 10px;
    width: 72%;
    margin: 5px auto;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.3px;
  }
`;
