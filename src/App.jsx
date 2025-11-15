import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/toast-provider'
import Home from './pages/Home'
import University1 from './pages/University1'
import University2 from './pages/University2'

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/university-1" element={<University1 />} />
          <Route path="/university-2" element={<University2 />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}
