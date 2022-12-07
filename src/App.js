import "./App.css";
import Navbar from "./components/Navbar.js/Navbar";
import News from "./components/News.js/News";
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
      <Route exact path='/business' element={<News category={'business'}/>}></Route>
      <Route exact path='/entertainment' element={<News category={'entertainment'}/>}></Route>
      <Route exact path='/environment' element={<News category={'environment'} />}></Route>
      <Route exact path='/food' element={<News category={'food'}/>}></Route>
      <Route exact path='/health' element={<News category={'health'}/>}></Route>
      <Route exact path='/politics' element={<News category={'politics'}/>}></Route>
      <Route exact path='/science' element={<News category={'science'} />}></Route>
      <Route exact path='/sports' element={<News category={'sports'} />}></Route>
      <Route exact path='/technology' element={<News  category={'technology'}/>}></Route>
      <Route exact path='/top' element={<News category={'top'}/>}></Route>
      <Route exact path='/' element={<Navigate to='/top'/>}></Route>
      <Route exact path='/world' element={<News category={'world'}/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
