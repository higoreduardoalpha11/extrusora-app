import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import eventBus from '@/app/utils/eventBus';
import { Button } from '@/app/components';
import './index.css';

const Notification = ({ notifications }) => {
  return (
    <div className="container p-relative">
      <article className="notification flex flex-col gap-30">
        <div className="flex flex-between">
          <Button
            type="button"
            variate="sm"
            title="Excluir notificações"
            content="Excluir notificações"
            color="danger"
          />

          <Button
            type="button"
            variate="sm"
            title="Fechar notificações"
            content={<MdClose />}
            color="none"
            handleOnClick={() => eventBus.dispatch('notification', false)}
          />
        </div>
        <div className="wrapper flex flex-col gap-10">
          {
            notifications.map((item) => (
              <div
                key={item?._id}
                className={`notification--card w-full flex flex-row flex-start gap-10 ${item?.visible ? 'info' : item?.type}`}
              >
                {!item?.visible && <span className="notification--card-bullet"></span>}
                <div className="notification--card-content flex flex-col gap-10">
                  <span className="font-sm text-white">{item?.title}<small>&nbsp;{item?.createdAt}</small></span>
                  <small>{item?.description}</small>
                </div>
              </div>
            ))
          }
        </div>
      </article>
    </div>
  )
}
Notification.propTypes = {
  notifications: PropTypes.array.isRequired,
}
export default Notification;