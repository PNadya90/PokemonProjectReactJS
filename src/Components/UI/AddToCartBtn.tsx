import React, { SyntheticEvent } from 'react'
import './AddToCartBtn.scss';

export default function AddToCartBtn() {
    function addToCart() {
    console.log("he");


    }


    return (
        <div className="add-button-area" onClick={(e: React.SyntheticEvent) => { e.preventDefault(); addToCart() }}>
            <button className="add-button" >
                <i className="bi bi-cart-plus"></i>
            </button>

        </div >
    )
}
