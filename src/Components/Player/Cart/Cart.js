
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    const totalSalary = cart.reduce((sum, player) => sum + player.salary,0);
    const playerName = cart.map( cart=> <li>{cart.name}</li> )
    const playerSalary = cart.map( cart=> <li>{cart.salary}</li> )
    //const cartStyle = { backgroundColor:' grey'}
    return (
        <div>
            <h2>This is Cart: {cart.length}</h2>
            <h3>{playerName}</h3>
            <p>Salary{playerSalary}</p>
            <p>Total salary: ${totalSalary}</p>
        </div>
    );
};

export default Cart;