import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import eventBus from './utils/eventBus';
import { Navbar, Toast, Loader, Notification } from './components';
import { Dashboard, Setting } from './scenes';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isNotification, setIsNotification] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      _id: 'akjsld987123as',
      type: 'error',
      title: 'Limite de pressão ultrapassado',
      description: 'Limite de pressão de trabalho está superior ao limite máximo de segurança, por favor, desligue o equipamento e analise suas condições de trabalho.',
      createdAt: '05/02/2000',
      visible: false,
    },
    {
      _id: 'jkh2ui123',
      type: 'warning',
      title: 'Limite de pressão próximo',
      description: 'Limite de pressão de trabalho está próximo ao limite máximo de segurança, por favor, tome cuidado e analise suas condições de trabalho.',
      createdAt: '05/02/2000',
      visible: false,
    },
    {
      _id: 'kjsaddas897',
      type: 'success',
      title: 'Peça acabada',
      description: 'Peça finalizada durante o ciclo de trabalho, por motivos de segurança o equipamento foi desligado.',
      createdAt: '05/02/2000',
      visible: false,
    },
    {
      _id: 'kljas879s',
      type: 'success',
      title: 'Peça acabada',
      description: 'Peça finalizada durante o ciclo de trabalho, por motivos de segurança o equipamento foi desligado.',
      createdAt: '05/02/2000',
      visible: false,
    },
  ]);

  useEffect(() => {
    // Listener/Clear loader
    eventBus.on('loader', (data) => setIsLoading(data));
    eventBus.remove('loader');

    // Listener/Clear toast
    eventBus.on('toast', (data) => setMessage(data));
    eventBus.remove('toast');

    // Listener/Clear notification
    eventBus.on('notification', (data) => setIsNotification(data));
    eventBus.remove('notification');
    eventBus.on('notifications', (data) => setNotifications(data));
    eventBus.remove('notifications');
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading && (<Loader />)}
        {isNotification && (<Notification notifications={notifications} />)}
        <Toast message={message} setMessage={setMessage} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configuracao" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App