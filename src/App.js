import logo from './logo.svg';
import './App.css';
import RealMadridPlayer from './fake data/fake data.json'
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Cart from './Components/Player/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [player, setPlayer] =  useState ([])
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    setPlayer( RealMadridPlayer)
    RealMadridPlayer.map(player => player.name);
   }, []);
   
  const handleAddPlayer=(player) =>{
    const newCart = [...cart, player]
    setCart(newCart)  
  } 
  return (
    <div className="App">
      <h2>Player: {player.length}</h2> 
       <Cart cart={cart}></Cart>   
       {
         player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
       }  
    </div>
  );
}

export default App;
