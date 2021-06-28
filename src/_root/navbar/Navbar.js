import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PopUp } from '../components/Popup';
import { useSelector } from 'react-redux'
import image from '../../assets/icons/cart-icon.svg';
import './Navbar.css';

export const Navbar = () => {
  const history = useHistory();
  const [show, setShow] = useState(false)

  const cart = useSelector(state => state.cart)

  const total = cart.reduce((acc, item) => {
    acc += item.qty

    return acc
  }, 0)

  const handleNavigate = () => {
    history.push('/inicio')
  }
  return (
    <div className="nav">
      <header>
        <h2 onClick={handleNavigate} >Game Storage</h2>
        <input type="text" />
        <span className="button" onClick={() => setShow(!show)}>
          <img src={image} alt="carrinho" width={40} height={40} />
          <div className="cart-result">{total}</div>
        </span>
        {show && <PopUp />}
      </header>
    </div>
  )
}