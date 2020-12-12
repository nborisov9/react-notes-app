import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { useAlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const { alert, hide } = useAlertContext();

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 350 }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit>
      <div className={`alert alert-${alert.type}`}>
        <div className="alert-text">
          <strong>Внимание!</strong>
          <span>{alert.text}</span>
        </div>
        <button onClick={hide} className="btn btn-close">
          &times;
        </button>
      </div>
    </CSSTransition>
  );
};
