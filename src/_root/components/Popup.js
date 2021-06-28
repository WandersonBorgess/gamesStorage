import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, decreaseProduct, removeProduct } from '../../store/ducks/cart'

import './Popup.css'

import listGames from '../../store/products.json'

export const PopUp = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const addItemCart = (id) => {
    dispatch(addProduct(id))
  }

  const decrementItemCart = (id) => {
    dispatch(decreaseProduct(id))
  }

  const removeItemCart = (id) => {
    dispatch(removeProduct(id))
  }

  const total = cart.reduce((acc, item) => {
    const game = listGames.find(obj => obj.id === item.id)
    acc += item.qty * game.price

    return acc
  }, 0)

  let frete = cart.reduce((acc, item) => {
    acc += item.qty * 10

    return acc
  }, 0)

  frete = total >= 250 ? 0 : frete




  return (
    <div className="pop-up">
      {
        cart.map((item, i) => {
          const game = listGames.find(game => game.id === item.id)
          const { id, name, image, price } = game

          return (
            <div className="row select-game" key={i}>
              <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} />
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <h4>{name}</h4>
                <p>R$ {price.toFixed(2)} / R$ {parseFloat(price * item.qty).toFixed(2)}</p>
                <div className="row" style={{ marginTop: 4 }}>
                  <button onClick={() => decrementItemCart(id)}> - </button>
                  <div style={{ width: 25, background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.qty}
                  </div>
                  <button onClick={() => addItemCart(id)}> + </button>

                  <button
                    onClick={() => removeItemCart(id)}
                    className="btn-remove"
                  >Remover</button>
                </div>
              </div>
            </div>
          )
        })
      }


      {
        cart.length === 0
          ? (
            <p>Nenhum item no carrinho</p>
          )
          : (
            <>
              <p style={{ paddingTop: 24 }}>Total: R$ {total.toFixed(2)}</p>
              <div className="row" style={{ marginTop: 8 }}>
              <p><b>SubTotal: R$ {(total + frete).toFixed(2)}</b></p>
              <p style={{ marginLeft: 8 }}>Frete: R$ {frete.toFixed(2)}</p>
              </div>

              <span className="btn-checkout">Checkout</span>
            </>
          )
      }

    </div>
  )
}