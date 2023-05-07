import { Link, useLocation } from 'react-router-dom';
import { MdApps, MdSettings, MdNotificationsNone, MdPowerSettingsNew } from 'react-icons/md';
import { useState } from 'react';

import eventBus from '@/app/utils/eventBus';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { logs } = useSelector((state) => state.analytics);
  const location = useLocation();
  const pathname = location.pathname;
  const [isEnergy, setIsEnergy] = useState(false); // Tenho que acionar e desacionar botoeira de emergência
  const logsUnread = logs?.filter((item) => !item.visible)?.length;

  return (
    <header className="navbar py-10 bg-bg-light">
      <div className="container flex flex-row flex-between">
        <Link to="/" className="flex flex-start gap-10 text">
          <MdApps className="font-h2 text-white" />
          <h6 className="text-white">Extrusora App</h6>
        </Link>

        <nav className="navbar--icons flex gap-10">
          <Link to="/configuracao" className="text">
            <MdSettings className={`font-h4 ${pathname === '/configuracao' ? 'text-light-green' : 'text-light'}`} />
          </Link>

          <span className="text p-relative cursor-pointer" onClick={() => {
            eventBus.dispatch('notification', true);
          }}>
            {logsUnread > 0 && <span className="p-absolute w-10 h-10 border-radius-full top-0 right-0 bg-light-green"></span>}

            <MdNotificationsNone className={`font-h4 ${pathname === '/notificacoes' ? 'text-light-green' : 'text-light'}`} />
          </span>

          <span
            className="text cursor-pointer"
            onClick={() => {
              setIsEnergy(!isEnergy);
              if (isEnergy) eventBus.dispatch('on-ready', true);
              else eventBus.dispatch('on-ready', false);
            }}
          >
            <MdPowerSettingsNew className={`font-h4 text ${isEnergy ? 'text-light-green' : 'text-danger'}`} />
          </span>
        </nav>
      </div>
    </header>
  )
}
export default Navbar;