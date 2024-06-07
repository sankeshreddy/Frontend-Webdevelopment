import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
const Home = () => {

  const {allCoin, currency} = useContext(CoinContext)
  const [displayCoin,setDisplayCoin] = useState([]);
  useEffect(()=>{
    setDisplayCoin(allCoin);
  },[allCoin])

  return (
    <div className='home'>
        <div className="hero">
          <h1>Largest<br/> Crypto Marketplace</h1>
          <p>Welcome to the world's largest cryptocurrency marketplace.
            Signup to explore more about cryptos.
          </p>
          <form>
            <input type="text" placeholder='Search crypto...' />
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className="crypto-table">
          <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:'center'}}>24hr Change</p>
            <p className='market-cap'>Market Cap</p>
          </div>
          {
            displayCoin.slice(0,20).map((item, index)=>(
              <div className='table-layout'>
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image} alt=""/>
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price}</p>
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home