import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main_container">
        <div className="middle_cont">
          <div className="thresix">
            <img src="https://i.ibb.co/2jbpv3h/vector-360-degree-icon-removebg-preview.png" />
          </div>
          <div className="namecont">
            <div className="namecont1">
              <div className="textshow">DIVINE INTO OUR</div>
              <div className="texthide"></div>
            </div>
            <div className="namecont2">
              <div className="hidetext"></div>
              <div className="showtext">VIRTUAL TOUR</div>
            </div>
          </div>
        </div>
        <div
          className="red_container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="child_container">
            <h2>100%</h2>
            <p>College Acceptance</p>
          </div>
          <div className="child_container">
            <h2>20</h2>
            <p>Years of Educational Excellence</p>
          </div>
          <div className="child_container">
            <h2>60%</h2>
            <p>STEM Program Participation</p>
          </div>
          <div className="child_container">
            <h2>15+</h2>
            <p>Extracurricular Activities</p>
          </div>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  .main_container {
    background-image: url(../../public/blog1.png);
    height: 80vh;
    width: 100%;
    margin: 5% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: visible;
  }

  .red_container {
    width: 70%;
    height: 20vh;
    margin: auto;
    position: absolute;
    bottom: -10vh;
    left: 15%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: rgb(185, 1, 36);
    border-radius: 15px;
    display: flex;
  }

  .child_container {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    /* padding: 10px; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  .child_container h2 {
    color: #fff;
    text-align: center;
    font-family: "TT Chocolates";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .child_container p {
    color: #fff;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .middle_cont {
    width: 25%;
    height: 13vh;

    display: flex;
  }
  .thresix {
    width: 20%;
    padding-top: 2px;
  }
  .thresix img {
    width: 100%;
  }
  .namecont {
    width: 80%;
  }
  .namecont1 {
    height: 50%;
    width: 100%;
    display: flex;
    align-items: end;
  }
  .namecont2 {
    height: 50%;

    width: 100%;
    display: flex;
    align-items: start;
  }
  .textshow {
    width: 73%;
    color: #fff;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .texthide {
    width: 27%;
  }
  .hidetext {
    width: 30%;
  }
  .showtext {
    width: 70%;
    color: #fff;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
