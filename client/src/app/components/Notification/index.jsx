import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import dayjs from 'dayjs';

import eventBus from '@/app/utils/eventBus';
import { Analytics } from '@/app/action';
import { Button } from '@/app/components';
import './index.css';

const Notification = () => {
  const dispatch = useDispatch();
  const { logs } = useSelector((state) => state.analytics);

  const deleteAllNotifications = async () => {
    dispatch(
      Analytics.handleDeleteLogs((message) => {
        if (message) eventBus.dispatch('toast', message);
        eventBus.dispatch('loader', false);
      })
    )
  }

  const toggleVisibleNotification = async (id) => {
    eventBus.dispatch('loader', true);
    dispatch(
      Analytics.handleToggleVisibleNotification(id, (message) => {
        if (message) eventBus.dispatch('toast', message);
        eventBus.dispatch('loader', false);
      })
    )
  }

  return (
    <div className="container p-relative">
      <article className="notification flex flex-col gap-30">
        <div className="flex flex-end gap-20">
          {
            logs?.length > 0 && (
              <Button
                type="button"
                variate="sm"
                title="Excluir notificações"
                content="Excluir notificações"
                color="danger"
                handleOnClick={() => {
                  eventBus.dispatch('modal', {
                    message: 'excluir todas notificações',
                    color: 'danger',
                    icon: 'danger',
                    cb: deleteAllNotifications,
                    target: '',
                  });
                }}
              />
            )
          }

          <Button
            type="button"
            variate="sm"
            title="Fechar notificações"
            content={<MdClose />}
            color="none"
            handleOnClick={() => eventBus.dispatch('notification', false)}
          />
        </div>

        {
          !logs?.length > 0 ? (
            <span className="text-danger text-center">
              Nenhuma notificação salva
            </span>
          ) : (
            <div className="wrapper flex flex-col gap-10">
              {
                logs.map((item) => (
                  <div
                    key={item?._id}
                    onClick={() => toggleVisibleNotification(item?._id)}
                    className={`notification--card w-full flex flex-row flex-start gap-10 ${item?.visible ? 'info' : item?.type}`}
                  >
                    {!item?.visible && <span className="notification--card-bullet"></span>}
                    <div className="notification--card-content flex flex-col gap-10">
                      <p className="flex flex-row gap-10 flex-wrap flex-between">
                        <span className="font-sm text-white">{item?.title}</span>
                        <small>{dayjs(item?.createdAt).format('ll')}</small>
                      </p>
                      <small>{item?.description}</small>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </article>
    </div>
  )
}
export default Notification;