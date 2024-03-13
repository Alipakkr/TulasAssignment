import archivment from "./Components/archivment";
import Banner from "./Components/Banner";
import Ranking from "./Components/Ranking";
import Students from "./Components/Students";
import TulasClg from "./Components/TulasClg";
import WhyTis from "./Components/Whyus";
import Yt from "./Components/Yt";
import Youtube from "./Components/Yt";
import Header from '../SubComponent/Header'

export default function App() {
  return (
    <div>
      <Header/>
      <Students />
      <Yt />
      <TulasClg />
      <WhyTis />
      <Banner />
      <archivment />
      <Ranking />
      <Youtube />
      
    </div>
  );
}
