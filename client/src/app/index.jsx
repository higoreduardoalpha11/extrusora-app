import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './lib/dayjs';
import eventBus from './utils/eventBus';
import { Analytics } from '@/app/action';
import { Navbar, Toast, Loader, Notification, Modal } from './components';
import { Dashboard, Setting } from './scenes';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isNotification, setIsNotification] = useState(false);
  const [modal, setModal] = useState(null);

  const getAllNotifications = async () => {
    eventBus.dispatch('loader', true);
    dispatch(
      Analytics.handleChangeLogs((message) => {
        if (message) eventBus.dispatch('toast', message);
        eventBus.dispatch('loader', false);
      })
    )
  }

  useEffect(() => {
    // Listener/Clear loader
    eventBus.on('loader', (data) => setIsLoading(data));
    eventBus.remove('loader');

    // Listener/Clear toast
    eventBus.on('toast', (data) => setMessage(data));
    eventBus.remove('toast');

    // Listener/Clear notification
    getAllNotifications();
    eventBus.on('notification', (data) => setIsNotification(data));
    eventBus.remove('notification');

    // Listener/Clear modal
    eventBus.on('modal', (data) => setModal(data));
    eventBus.remove('modal');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <div className="App">
        {isLoading && (<Loader />)}
        <Toast message={message} setMessage={setMessage} />
        {isNotification && (<Notification />)}
        {
          modal && (
            <Modal
              message={modal?.message}
              color={modal?.color}
              icon={modal?.icon}
              setModal={setModal}
              cb={modal?.cb}
              target={modal?.target}
            />
          )
        }
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