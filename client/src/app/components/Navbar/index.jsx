import { Link, useLocation } from 'react-router-dom';
import { MdApps, MdSettings, MdNotificationsNone, MdPowerSettingsNew } from 'react-icons/md';
import { useState } from 'react';

import eventBus from '@/app/utils/eventBus';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isNofifiction, setIsNotification] = useState(false);
  const [isEnergy, setIsEnergy] = useState(false); // Tenho que acionar e desacionar botoeira de emergência

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

          <Link to="/notificacoes" className="text p-relative" onClick={() => setIsNotification(false)}>
            { isNofifiction && <span className="p-absolute w-10 h-10 border-radius-full top-0 right-0 bg-danger"></span>}
            
            <MdNotificationsNone className={`font-h4 ${pathname === '/notificacoes' ? 'text-light-green' : 'text-light'}`} />
          </Link>

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