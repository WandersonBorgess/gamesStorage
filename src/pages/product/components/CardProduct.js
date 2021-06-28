import React from 'react';

import { addProduct } from '../../../store/ducks/cart'

import cart from '../../../assets/icons/cart-icon.svg';
import { useDispatch } from 'react-redux'

import { Stars } from '../../../_root/components/Stars'

export const CardProduct = ({ game }) => {
  const { id, image, name, score, price } = game
  const dispatch = useDispatch()

  const addItemCart = () => {
    dispatch(addProduct(id))
  }

  return (
    <>
      <div className="card-product">
        <div className="img-content">
          <img src={`${process.env.PUBLIC_URL}/images/${image}`}  alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <Stars />
            ({score})
          </div>
          <p>
            É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.
            A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras,
            ao contrário de "Conteúdo aqui, conteúdo aqui",
            fazendo com que ele tenha uma aparência similar a de um texto legível.
          </p>
        </div>
      </div>

      <div className="product-offer">
        <h2>R$ {price}</h2>

        <span />

        <button onClick={addItemCart}>
          <img src={cart} alt="carrinho" /> comprar
        </button>

        <span />

        <p>Produto vendido por Game Storage</p>
      </div>
    </>
  )
}