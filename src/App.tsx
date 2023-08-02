import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Page2 from './components/Page2';
import Page3 from './components/Page3'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
       {/* <Route path="/" element={<Page2 />} /> */}
        <Route path="/" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;
