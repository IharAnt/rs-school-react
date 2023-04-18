import React, { FC, useState } from 'react';
import Card from '../card';
import './style.scss';
import { ICardListProps } from './types';
import Modal from '../modal';
import MinCard from '../minCard';
import ProgressSpinner from '../progressSpinner';
import Message from '../message';
import { useLazyGetProductQuery } from '../../store/api/productsApi';
import { getErrorMessage } from '../../helper/errorQuery';

const CardList: FC<ICardListProps> = ({ products }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [getProduct, { data, error, isFetching }] = useLazyGetProductQuery();

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const clickCard = async (productId: number) => {
    try {
      await getProduct(productId).unwrap();
    } catch {
    } finally {
      setIsOpenModal(true);
    }
  };

  return (
    <div className="card-list">
      {products.map((product) => {
        return <MinCard product={product} onClickCard={clickCard} key={product.id}></MinCard>;
      })}
      {isFetching ? (
        <ProgressSpinner isShow={isFetching}></ProgressSpinner>
      ) : (
        <Modal isOpen={isOpenModal} onRequestClose={closeModal}>
          {!error ? (
            <Card product={data}></Card>
          ) : (
            <Message className="products-message" isError={true}>
              {getErrorMessage(error)}
            </Message>
          )}
        </Modal>
      )}
    </div>
  );
};

export default CardList;
