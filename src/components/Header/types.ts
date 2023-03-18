import { useLocation, useNavigate } from 'react-router-dom';

export type Props = {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
};

export type State = {
  activePage: string;
};
