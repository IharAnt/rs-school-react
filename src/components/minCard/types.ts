import { IProduct } from '../../types/interfaces/IProduct';

export interface IMinCardProps {
  product: IProduct;
  onClickCard: (id: number) => void;
}
