import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Dashboard, Setting, Notifications } from './scenes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configuracao" element={<Setting />} />
          <Route path="/notificacoes" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App