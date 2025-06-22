import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import NewRequest from '@/pages/NewRequest'
import RequestDetail from '@/pages/RequestDetail'
import Calendar from '@/pages/Calendar'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/nouvelle-demande" element={<NewRequest />} />
          <Route path="/demande/:id" element={<RequestDetail />} />
          <Route path="/agenda" element={<Calendar />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  )
}

export default App