import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import eventBus from './utils/eventBus';
import { Navbar, Toast, Loader } from './components';
import { Dashboard, Setting, Notifications } from './scenes';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Listener/Clear loader
    eventBus.on('loader', (data) => setIsLoading(data));
    eventBus.remove('loader');

    // Listener/Clear toast
    eventBus.on('toast', (data) => setMessage(data));
    eventBus.remove('toast');

    // Listener/Clear modal
    // eventBus.on('modal', (data) => setModal(data));
    // eventBus.remove('modal');
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading && (<Loader />)}
        <Toast message={message} setMessage={setMessage} />
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