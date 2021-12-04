import React from "react"
import {render, screen} from "@testing-library/react"
import AppProvider from "../../../StateManager/AppProvider";
import Shop from "./Shop"
import { BrowserRouter } from "react-router-dom";

const MockShop = function(){
    return (
        <BrowserRouter>
            <Shop />
        </BrowserRouter>
    )
};

const ShopRender = function(cartItems){
    return render(
        <AppProvider value={cartItems}>
            <MockShop />
        </AppProvider>
    )
};

describe("shop component testing", function(){
    test("render shop section", function(){
        ShopRender(null)
        expect(screen.getByTestId("shop")).toBeInTheDocument()
    })

    test("should render product list", function(){
        ShopRender(null)
        expect(screen.getByTestId("list")).toHaveClass("product-list")
    })
});