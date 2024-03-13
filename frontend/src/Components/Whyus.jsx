import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Whyus() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main_container">
        <div className="Whyus">
          <p>
            Why <span>TIS ?</span>
          </p>
        </div>
        <div className="content_container">
          <div className="left_section" data-aos="fade-right">
            <div className="focus_manage">
              <div className="focus">
                <div className="focus_show">
                  <p>A FOCUS ON...</p>
                </div>
                <div className="focus_hide"></div>
              </div>
              <div className="management">
                <div className="manage_hide"></div>
                <div className="manage_show">
                  <p>MANAGEMENT</p>
                </div>
              </div>
            </div>
            <div className="text_content">
              <p>
                Extremely Friendly and Approachable Management. Tula’s
                International School combines – respect for tradition with a
                progressive application of modern sciences, academic rigour with
                a caring heart, and individual appreciation with the warmth of a
                school community
              </p>
            </div>
          </div>
          <div className="right_section">
            <div className="image_container" data-aos="fade-left">
              <img src="../../public/Students.png" />
            </div>
            <div className="small_img_container">
              <div
                className="smalltis_cont"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="image-container-1">
                  <img
                    src="https://i.pinimg.com/564x/1d/22/0f/1d220ffe45e1cdd5035160f9e324920e.jpg"
                    alt="Campus"
                  />
                </div>
                <p>CAMPUS</p>
              </div>
              <div
                className="smalltis_cont"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="image-container-2">
                  <img
                    src="https://i.pinimg.com/564x/f0/1e/f8/f01ef836c411cb8b362919f2df6c83a1.jpg"
                    alt="Expert Instruction"
                  />
                </div>
                <p>EXPERT INSTRUCTION</p>
              </div>
              <div
                className="smalltis_cont"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="image-container-3">
                  <img
                    src="https://i.pinimg.com/564x/aa/5f/84/aa5f84d0749bba2fe1ee40701d25259b.jpg"
                    alt="Campus"
                  />
                </div>
                <p>TRAINING METHODS</p>
              </div>
              <div
                className="smalltis_cont"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="image-container-4">
                  <img
                    src="https://i.pinimg.com/564x/61/6d/f7/616df750a40382044332c27acfc9373a.jpg"
                    alt="Campus"
                  />
                </div>
                <p>RATIO</p>
              </div>
              <div
                className="smalltis_cont"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="image-container-5">
                  <img
                    src="https://i.ibb.co/jRsPyPL/9303d855799577b627cc4a128ab514bc-removebg-preview.png"
                    alt="Campus"
                  />
                </div>
                <p>MANAGEMENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 5% !important;
  width: 82%;
  margin: auto;

  height: 100%;
  .whytis {
    width: 100%;
    text-align: center;
  }
  .whytis p {
    color: #202833;
    text-align: center;
    font-family: Mirador;
    font-size: 55px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
  }
  .whytis span {
    color: #b90124;
    font-family: Mirador;
    font-size: 55px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
  }
  .content_container {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2%;
  }
  .left_section {
    width: 50%;
    height: 100%;
    padding: 5px;
  }

  .focus {
    width: 100%;
    display: flex;
  }
  .focus p {
    color: #202833;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .management {
    width: 100%;
    display: flex;
  }
  .manage_hide {
    width: 30%;
  }
  .manage_show {
    width: 70%;
  }
  .manage_show p {
    float: right;
    margin-top: 5px;
    color: #b90124;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .focus_manage {
    width: 70%;
    margin: auto;
  }
  .text_content {
    width: 70%;
    margin: 8% auto;
    padding-left: 4%;
  }
  .text_content p {
    color: #202833;
    font-family: "TT Chocolates";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .right_section {
    width: 50%;
    height: 100%;
    display: flex;
    padding: 5px;
  }
  .image_container {
    width: 75%;
    height: 460px;
    margin-top: 15px;
  }
  .image_container img {
    width: 100%;
  }
  .small_img_container {
    width: 25%;
    height: 450px;
    display: flex;
    flex-direction: column;
  }

  .smalltis_cont {
    width: 70%;
    height: 20%;
    margin-bottom: 10px;
    text-align: center;
    margin: auto;
  }

  .image-container-1,
  .image-container-2,
  .image-container-3,
  .image-container-4,
  .image-container-5 {
    height: 75%;
    width: 60%;
    margin: auto;
  }

  .smalltis_cont:nth-child(5) {
    background-color: red;
    border-radius: 10px;
  }
  .smalltis_cont:hover {
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 10px;
  }
  .smalltis_cont img {
    max-width: 80%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
  }

  .smalltis_cont p {
    margin-top: -5px;
    font-size: 12px;
    font-weight: bold;
  }
`;
