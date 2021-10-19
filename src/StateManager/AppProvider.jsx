import { ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART,CLEAR_CART,INCREASE_QUANT,DECREASE_QUANT,GET_TOTALS } from "./type"
import React, {useReducer, useEffect} from "react"
import Context from "./Context"
import {products} from "../components/ecommerce/product/data"
import Reducer from "./Reducer"

const initialState = {
    cartItems: [],
    cartItemsTotal: 0,
    cartMoneyTotal: 0
}

export default function AppProvider({children}){
    const [state, dispatch] = useReducer(Reducer, initialState)

    const addItemToCart = function(product){
        dispatch({type:ADD_ITEM_TO_CART, payload: product})
    }
    const removeItemFromCart = function(id){
        dispatch({type:REMOVE_ITEM_FROM_CART, payload: id})
    }
    const clearCart = function(){
        dispatch({type: CLEAR_CART})
    }
    const increaseQuant = function(id){
        dispatch({type:INCREASE_QUANT, payload: id})
    }   
    const decreaseQuant = function(id){
        dispatch({type:DECREASE_QUANT, payload: id})
    }
    
    useEffect(function(){
        dispatch({type: GET_TOTALS})
    },[state.cartItems])

    return(
        <Context.Provider
            value={{
                products: products,
                ...state,
                addItemToCart,
                removeItemFromCart,
                clearCart,
                increaseQuant,
                decreaseQuant
            }}>
            {children}
        </Context.Provider>
    )
}