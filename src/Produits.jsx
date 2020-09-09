import React, { useState } from 'react'

export default function Produits({ addToCart }) {
    const [produits] = useState([
        {
            name: 'Caterpilar',
            cost: '200.000Fcfa',
            image: 'cat.jpg'
        },
        {
            name: 'Blue',
            cost: '200.000Fcfa',
            image: 'blue.jpg'
        },
        {
            name: 'Pneu',
            cost: '200.000Fcfa',
            image: 'pneu.jpg'
        },
        {
            name: 'Cate',
            cost: '200.000Fcfa',
            image: 'cat2.jpg'
        }

    ]);
    return (
        <>
            <h1>Produits</h1>
            <div className="produits">
                {produits.map((produit, idx) => (

                    <div className="produit" key={idx}>
                        <h3>{produit.name}</h3>
                        <h4>{produit.cost}</h4>

                        <img src={produit.image} alt={produit.name} />


                        <button onClick={() => addToCart(produit)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
