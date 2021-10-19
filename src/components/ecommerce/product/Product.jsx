import React, {useState} from "react"
import { HashLink } from "react-router-hash-link";
import { FaCartPlus } from "react-icons/fa";

export default function Product({addItemToCart, goToCart, ...props}){
    const {title, image, price} = props;
    const [isHover, setIsHover] = useState(false)

    const handleMouseOver = function(){
        setIsHover(true)
    }

    const handleMouseLeave = function(){
        setIsHover(false)
    }

    return (
        <div className="product-wrapper">
            <article className="product-card" 
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave}>
            {isHover && (
                <div className="product-card-overlay">
                    <div className="add-to-cart"
                        onClick={function(){
                            addItemToCart({...props})
                        }}>
                        <FaCartPlus className="add-icon"/>
                        <p className="add-title">add to cart</p>
                    </div>
                </div>
            )}
                <img src={image} alt={title} />
                <div className="card-body">
                    <span className="product-title">{title}</span>
                    <span className="product-price">{price}</span>
                </div>
            </article>
            <HashLink
                smooth to="#shop-nav">
                <button className="go-to-cart"
                    onClick={goToCart}>
                    go to cart
                </button>
            </HashLink>
        </div>
    )
}