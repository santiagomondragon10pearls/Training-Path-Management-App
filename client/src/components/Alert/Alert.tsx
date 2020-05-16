// @ts-check
import React from 'react';
import { useSelector } from 'react-redux';
import { AlertType, StateType } from 'CustomTypes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faExclamation,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import AlertContainer, { AlertItem } from './styles';

const Alert = () => {
  const alerts = useSelector((state: StateType) => state.alert);

  const renderIcon = (icon: string) => {
    if (icon === 'error') return <FontAwesomeIcon icon={faTimesCircle} />;
    if (icon === 'success') return <FontAwesomeIcon icon={faCheckCircle} />;
    if (icon === 'warning')
      return <FontAwesomeIcon icon={faExclamationTriangle} />;

    return <FontAwesomeIcon icon={faExclamation} />;
  };

  return (
    <AlertContainer>
      {alerts !== null &&
        alerts.length! > 0 &&
        alerts.map((alert: AlertType) => (
          <AlertItem
            key={alert.id}
            className={alert.alertType}
            timeOut={alert.timeout}>
            {renderIcon(alert.alertType)}
            {alert.msg}
            <button>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </AlertItem>
        ))}
    </AlertContainer>
  );
};

Alert.propTypes = {};

export default Alert;
