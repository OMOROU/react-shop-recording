import React from 'react'

export default function Cart({ cart, removeFromCart }) {
    return (
        <>
            <h1>Cart</h1>
            <div className="produits">
                {cart.map((produit, idx) => (

                    <div className="produit" key={idx}>
                        <h3>{produit.name}</h3>
                        <h4>{produit.cost}</h4>

                        <img src={produit.image} alt={produit.name} />


                        <button onClick={() => removeFromCart(produit)}>Remove From Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
