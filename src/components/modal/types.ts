import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}
