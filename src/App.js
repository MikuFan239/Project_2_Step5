import Sidenav from "./Sidenav";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import HowToJoin from "./Join/HowToJoin";
import HowToJoin2 from "./Join/HowToJoin2";
import HowToJoin3 from "./Join/HowToJoin3";
import HowToJoin4 from "./Join/HowToJoin4";
import ConcertDetailMM2021 from "./ConcertDetail/ConcertDetailMM2021";
import ConcertDetailMM2020 from "./ConcertDetail/ConcertDetailMM2020";
import ConcertDetailMM2019 from "./ConcertDetail/ConcertDetailMM2019";
import ConcertDetailMM2018 from "./ConcertDetail/ConcertDetailMM2018";
import ConcertDetailMM2017 from "./ConcertDetail/ConcertDetailMM2017";
import ConcertDetailMM2016 from "./ConcertDetail/ConcertDetailMM2016";
import ConcertDetailMM2015 from "./ConcertDetail/ConcertDetailMM2015";
import ConcertDetailMM2014 from "./ConcertDetail/ConcertDetailMM2014";
import ConcertDetailMM2013 from "./ConcertDetail/ConcertDetailMM2013";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npx json-server --watch data/db.json --port 8000 

function App() {

  return (
    <Router>
      <div className="App">
        <Sidenav />
        <ScrollToTop />
        <div className="content">
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/ConcertDetailMM2021" element={<ConcertDetailMM2021 />}/>
              <Route path="/ConcertDetailMM2020" element={<ConcertDetailMM2020 />}/>
              <Route path="/ConcertDetailMM2019" element={<ConcertDetailMM2019 />}/>
              <Route path="/ConcertDetailMM2018" element={<ConcertDetailMM2018 />}/>
              <Route path="/ConcertDetailMM2017" element={<ConcertDetailMM2017 />}/>
              <Route path="/ConcertDetailMM2016" element={<ConcertDetailMM2016 />}/>
              <Route path="/ConcertDetailMM2015" element={<ConcertDetailMM2015 />}/>
              <Route path="/ConcertDetailMM2014" element={<ConcertDetailMM2014 />}/>
              <Route path="/ConcertDetailMM2013" element={<ConcertDetailMM2013 />}/>
              <Route path="/HowToJoin" element={<HowToJoin />}/>
              <Route path="/HowToJoin2" element={<HowToJoin2 />}/>
              <Route path="/HowToJoin3" element={<HowToJoin3 />}/>
              <Route path="/HowToJoin4" element={<HowToJoin4 />}/>
            </Routes>
          </div>
      </div>
    </Router>

  );
}

export default App;
