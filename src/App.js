import HomePage from './pages/HomePage'
import CompletedTask from './pages/CompletedTask';
import PendingTask
 from './pages/PendingTask';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/completed" element={<CompletedTask />}/>
        <Route path="/pending" element={<PendingTask />}/>
      </Routes>
    </Router>
    

  );
}

export default App;
