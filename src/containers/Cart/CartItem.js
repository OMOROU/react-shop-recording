import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, prix, total, count } = item;
    const { increment, decrement, removeItem } = value
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid" alt="produit" />

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">produit : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">prix : </span>
                {prix}
            </div>
            <div className="col-10 mx-auto col-lg-2 col-lg-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => { decrement(id) }}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => { increment(id) }}>+</span>
                    </div>
                </div>
            </div>
            {/* total */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>produit total : $ {total}</strong>

            </div>
        </div>
    );


}