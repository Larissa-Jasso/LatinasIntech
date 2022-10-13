import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'

function App() {
  return (
    <Router>
      <Routes>     
      <Route  element={<Navbar/>}>       
        <Route path="/" element={<Jobs/>} />       
        <Route path="/" element={<JobDetails/>} />       
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
