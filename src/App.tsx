import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RepairRequests from './pages/RepairRequests';
import NewRequest from './pages/NewRequest';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/repair-requests" element={<RepairRequests />} />
          <Route path="/new-request" element={<NewRequest />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
