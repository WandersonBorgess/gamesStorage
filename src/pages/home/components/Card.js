import React from 'react';
import { useHistory } from 'react-router-dom'

import { Stars } from '../../../_root/components/Stars'

export const Card = ({ game }) => {
  const history = useHistory()

  function handleNavigate() {
    history.push(`/produto/${id}`)
  }

  const { name, price, score, image, id } = game

  return (
    <div className="card-select" onClick={handleNavigate}>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} />
      <p style={{ marginTop: 16 }}>{name}</p>
      <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <Stars />
        ({score})
      </div>
      <strong>{price}</strong>
    </div>
  )
}