import React, { FC } from 'react';
import './style.scss';
import { IModalProps } from './types';

const Modal: FC<IModalProps> = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={() => onRequestClose()} data-testid="modal-overlay">
      <div className="modal-content__wrapper" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal__close"
          data-testid="modal-close"
          onClick={() => {
            onRequestClose();
          }}
        ></div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
