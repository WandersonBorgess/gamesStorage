import React, { useState, useEffect } from 'react';

import { Navbar } from '../../_root/navbar/Navbar'
import { Card } from './components/Card'
import './Home.css'

import listGames from '../../store/products.json'

function Home() {
  const [sorted, setSorted] = useState([])
  const [filter, setFilter] = useState('popularidade')


  useEffect(() => {
    const list = [...listGames]
    if(filter === "popularidade") {
      setSorted(list.sort((a, b) => a.score > b.score ? -1 : (a.score < b.score ? 1 : 0)))
    } else if (filter === "a-z") {
      setSorted(list.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)))
    } else {
      setSorted(list.sort((a, b) => a.price < b.price ? -1 : (a.price > b.price ? 1 : 0)))
    }

  }, [filter])


  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="order-select" style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="preco">Preço</option>
            <option value="popularidade">Popularidade</option>
            <option value="a-z">A-Z</option>
          </select>
        </div>
        <div className="row card-box">
        {sorted.map((game, i) => <Card key={Math.random()} game={game}/> )}
        </div>
      </div>
    </div>
  )
}

export default Home