import React, { FC, useState } from 'react';
import Card from '../card';
import './style.scss';
import { ICardListProps } from './types';
import Modal from '../modal';
import MinCard from '../minCard';
import { IProduct } from '../../types/interfaces/IProduct';
import ProgressSpinner from '../progressSpinner';
import { productService } from '../../services/ProductsService';
import { AxiosError } from 'axios';
import Message from '../message';

const CardList: FC<ICardListProps> = ({ products }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [product, seProduct] = useState<IProduct | null>(null);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const clickCard = async (productId: number) => {
    try {
      setErrorMessage('');
      setIsLoading(true);
      const product = await productService.getProduct(productId);
      seProduct(product);
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message || error.message);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unknown error');
      }
    } finally {
      setIsLoading(false);
      setIsOpenModal(true);
    }
  };

  return (
    <div className="card-list">
      {products.map((product) => {
        return <MinCard product={product} onClickCard={clickCard} key={product.id}></MinCard>;
      })}
      <Modal isOpen={isOpenModal} onRequestClose={closeModal}>
        {!errorMessage ? (
          <Card product={product}></Card>
        ) : (
          <Message className="products-message" isError={true}>
            {errorMessage}
          </Message>
        )}
      </Modal>
      <ProgressSpinner isShow={isLoading}></ProgressSpinner>
    </div>
  );
};

export default CardList;
