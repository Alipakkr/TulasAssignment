import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
export default function YTbanner() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="ytlogo">
        <img src="https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png" />
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  margin-top: 10%;
  border-radius: 20px;
  border-radius: 25px;
  opacity: 0.5;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 100vh;
  background: url(../../public/image17.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .ytlogo {
    width: 140px;
    height: 100px;
  }
  .ytlogo img {
    width: 100%;
  }
`;
