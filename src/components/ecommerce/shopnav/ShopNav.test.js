import React from "react"
import {render, screen} from "@testing-library/react"
import AppProvider from "../../../StateManager/AppProvider"
import ShopNav from "./ShopNav"

const ShopNavRender = function(cartItemsTotal){
    return render(
        <AppProvider value={cartItemsTotal}>
            <ShopNav />
        </AppProvider>
    )
};

describe("shopnav component testing", function(){
    test("shoud render shop nav title", function(){
        ShopNavRender(null)
        expect(screen.getByRole("heading")).toHaveTextContent(/ecommerce shop/i)
    })

    test("should render cart icon & cart count", function(){
        ShopNavRender(null)
        expect(screen.getByTestId("icon")).toHaveClass("cart-icon")
        expect(screen.getByTestId("count")).toHaveClass("cart-count")
    })
});