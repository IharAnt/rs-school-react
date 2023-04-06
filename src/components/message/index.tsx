import React, { FC } from 'react';
import './style.scss';
import { IMessageProps } from './types';

const Message: FC<IMessageProps> = ({ children, className, isError = false }) => {
  return <div className={`${className || ''} ${isError ? 'message-error' : ''}`}>{children}</div>;
};

export default Message;
