import React , {useContext, useState}from "react"
import Context from "../../../StateManager/Context"
import Product from "../product/Product"
import ShopNav from "../shopnav/ShopNav"
import Cart from "../cart/Cart"

export default function Shop(){
    const context = useContext(Context)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = function(){
        setIsCartOpen(true)
    }

    const closeCart = function(){
        setIsCartOpen(false)
    }

    const goToCart = function(){
        setIsCartOpen(true)
    }

    return (
        <section className="shop" id="shop">
            <ShopNav 
                openCart={openCart}
                cartItemsTotal={context.cartItemsTotal}
            />
            <Cart 
                cartItems={context.cartItems}
                isCartOpen={isCartOpen}
                closeCart={closeCart}
                removeItem={context.removeItemFromCart}
                clearCart={context.clearCart}
                increase={context.increaseQuant}
                decrease={context.decreaseQuant}
                cartMoneyTotal={context.cartMoneyTotal}
            />
            <div className="shop-container">
                <div className="product-list">
                    {context.products.map(function(product){
                        const {id, title, image, price, quantity} = product;
                        return (
                            <Product 
                                key={id}
                                id={id}
                                title={title}
                                image={image}
                                price={price}
                                quantity={quantity}
                                addItemToCart={context.addItemToCart}
                                goToCart={goToCart}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}