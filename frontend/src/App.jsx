
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../components/Home/Home';
import Getcontact from '../components/Getcontact/Getcontact';
import Setcontact from '../components/Setcontact/Setcontact';




function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getcontact" element={<Getcontact />} />
        <Route path="/setcontact" element={<Setcontact />} />
      </Routes>
    </Router>
  )
}

export default App;