
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'


const Player = (props) => {
    const {name, image, salary, club} = props.player;
    const imageStyle = {height: '200px', width:'300px'}
    const handleAddPlayer = props.handleAddPlayer
   
  // console.log(props);
    return (
        <div className='RealMadridPlayer'>
            <div className='image-container'>
                 <img style={imageStyle} src={image} alt=""/>
            </div>
            <div className='player-container'>
                <h2>Player Name: {name}</h2>;  
                <p>Salary: ${salary}</p>
                <h3>Club: {club}</h3>
                <button className='main-button'
                onClick={()=> handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />Add player</button>
            </div>
         </div>   
        
    );
};

export default Player;