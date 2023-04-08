import React, { FC } from 'react';
import './style.scss';
import { IProgressSpinnerProps } from './types';
import loadingGif from '../../assets/img/loading.gif';

const ProgressSpinner: FC<IProgressSpinnerProps> = ({ isShow }) => {
  if (!isShow) {
    return null;
  }

  return (
    <div className="progress-spinner__wrapper">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default ProgressSpinner;
