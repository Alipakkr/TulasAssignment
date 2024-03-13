import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Yt() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main">
        <div className="left" data-aos="fade-up">
          <div className="textfile">
            <div className="head">
              <h1>
                From The <span>Parents</span>
              </h1>
            </div>

            <div className="svg_area">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8jwxaSxFDjz0CO2EyB6KZvYHiq9_0LSAhfnr3AJKs-cZBkJSh"
                alt="ruets"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="350"
                height="3"
                viewBox="0 0 622 3"
                fill="none"
              >
                <path d="M0.5 1.5H621.5" stroke="#B90124" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="para">
              <p>
                What stands out to us is the schools emphasis on individualized
                attention. Our childs teachers have been attentive to their
                unique needs, providing the support and encouragement necessary
                for their academic success.
              </p>
            </div>
          </div>
        </div>
        <div className="right_conter" data-aos="fade-up">
          <div className="video_container">
            <iframe
              width="560"
              height="355"
              src="https://www.youtube.com/embed/PavYAOpVpJI"
              frameBorder="10px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="red_area"></div>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  .main{
    width: 100%;
    height: 70vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .left{
    width: 50%;
    height: 50%;
  }
  .textfile{
    width: 80%;
    height: 100%;
    margin: auto;
  }
  .head {
    width: 60%;
    margin: auto;
  }
  .head h1 {
    color: #000;
    font-family: "URW DIN Arabic";
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 1.6px;
  }
  .para {
    /* text-align: start; */
    margin-top: 20px;
  }
  .para p {
    color: #000;
    font-family: "TT Chocolates Trl";
    font-size: 18px;
    letter-spacing: 0.6px;
    width: 70%;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 20px auto;
  }
  .head span {
    color: #b90124;
    font-family: Mirador;
    font-size: 50px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 1.6px;
  }
  .svg_area {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }
  .svg_area img {
    width: 10%;
  }
  .right_conter {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video_container {
    position: relative;
    width: 450px;
    height: 300px;
    margin-right: -150px;
    overflow: hidden;
    z-index: 999;
  }

  .video_container iframe {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    z-index: 999;
    height: 100%;
    border: 1px solid white;
  }
  .red_area {
    width: 50%;
    height: 80%;
    background: #b90124;
    z-index: -1;
  }
`;
