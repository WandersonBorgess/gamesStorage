import React from 'react'

import { Navbar } from '../../_root/navbar/Navbar'

import './Product.css'

import { CardProduct } from './components/CardProduct'
import listGames from '../../store/products.json'

import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()

  const game = listGames.find(item => item.id === Number(id))
  if (!game) {
    return (
      <div className="container">
        <Navbar />

        <div className="row content">
          <h1>Oops!</h1>
          <p>A página que você estava procurando não foi encontrada</p>
          <p>Verifique o endereço digitado e tente novamente</p>

          <a href="/" className="button">Voltar para a página inicial</a>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Navbar />

      <div className="row content card-box">
        <CardProduct game={game} />
      </div>
    </div>
  )
}

export default Product