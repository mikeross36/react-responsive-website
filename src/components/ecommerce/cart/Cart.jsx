import React, {useRef} from "react"
import {FaTrash, FaChevronUp, FaChevronDown} from "react-icons/fa"
import useOutsideClick from "../../../hooks/useOutsideClick";

export default function Cart({
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeItem,
    clearCart,
    increase,
    decrease,
    cartMoneyTotal}){

    const asideRef = useRef(null)
    useOutsideClick(asideRef, function(){
        closeCart()
    })

    return (
        <section className="cart">
            <aside data-testid="aside-element"
                className={`sidebar ${isCartOpen ? "expand" : "shrink"}`}
                ref={asideRef}>
                <button className="close-cart"
                    onClick={closeCart}>close</button>
                <dd className="cart-header">your cart</dd>
                {cartItems.length === 0 ? (
                    <aside className="empty-cart">cart is empty</aside>
                ) : (
                    cartItems.map(function(product){
                        const {id, image, title, price, quantity} = product;
                        return (
                            <article key={id} className="cart-item">
                                <img src={image} alt={title} />
                                <div className="cart-column">
                                    <span className="title">{title}</span>
                                    <span className="price">{price}</span>
                                    <span className="remove-item"
                                        onClick={function(){
                                            removeItem(id)
                                        }}>
                                        <FaTrash />
                                    </span>
                                </div>
                                <div className="cart-column">
                                    <button className="quant-btn"
                                        onClick={function(){
                                            increase(id)
                                        }}>
                                        <FaChevronUp className="increase"/>
                                    </button>
                                    <span className="quantity">{quantity}</span>
                                    <button className="quant-btn"
                                        onClick={function(){
                                            decrease(id)
                                        }}>
                                        <FaChevronDown className="decrease"/>
                                    </button>
                                </div>
                            </article>
                        )
                    })
                )}
                <footer className="cart-footer">
                    <div className="cart-money-total">
                        Total: <span>{cartMoneyTotal} €</span>
                    </div>
                    {cartItems.length !== 0 && (
                        <button className="clear-cart"
                            onClick={clearCart}>
                            clear cart
                        </button>
                    )}
                </footer>
            </aside>
        </section>
    )
}