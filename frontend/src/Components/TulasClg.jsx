import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function TulasClg() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="container">
        <div className="left-section" data-aos="fade-right">
          <img src="../../public/image19.png" alt="Image" />
        </div>
        <div className="right-section" data-aos="fade-left">
          <h2>At Tula’s, we ask, “How can we make school better?”</h2>
          <p>
            Using the latest research on how girls learn best, we designed an
            innovative modular schedule, personalized for each student. Our
            girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying
            here. Develop leadership skills, build compassion, gain
            responsibility, and prepare to change the world.
          </p>

          <button className="learnmore_btn">
            LEARN MORE <img src="../../public/imagearrow2.png" />
          </button>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  margin-top: 5% !important;
  width: 80%;
  margin: auto;
  height: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-section {
    width: 30%;
  }
  .left-section img {
    width: 100%;
  }
  .right-section {
    width: 55%;
  }

  .right-section h2 {
    color: #b90124;
    font-family: Mirador;
    font-size: 35px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.8px;
  }

  .right-section p {
    color: #000;
    font-family: "TT Chocolates Trl";
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.75px;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 34.5px;
    background-color: #fff;
    border: 2.5px solid #dbc79f;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    float: right;
    width: 40%;
    margin-top: 30px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
  }
  button img {
    margin-left: 40px;
    width: 20%;
  }
  button:hover {
    background-color: #dbc79f;
    color: #fff;
    border-color: #dbc79f;
  }
`;
