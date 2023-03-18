import { useLocation, useNavigate } from 'react-router-dom';

export type Props = {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
};

export type State = {
  activePage: string;
};

export type ClassNameProps = {
  isActive: boolean;
  isPending: boolean;
};

export type ClassNameFunc = (props: ClassNameProps) => string | undefined;
