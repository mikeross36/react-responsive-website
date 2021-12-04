import React from "react"
import {render} from "@testing-library/react"
import Product from "./Product"
import { BrowserRouter } from "react-router-dom"

const MockProduct = function(){
    return (
        <BrowserRouter>
            <Product />
        </BrowserRouter>
    )
};

describe("product components testting", function(){
    test("render product card", function(){
        const {getByRole} = render(<MockProduct />)
        const product = getByRole("article")
        expect(product).toHaveClass("product-card")
    })

    test("should render products image", function(){
        const {getByRole} = render(<MockProduct />)
        const image = getByRole("img")
        expect(image).toBeTruthy()
    })

    test("should render products title & price", function(){
        const {getByTestId} = render(<MockProduct />)
        const title = getByTestId("title")
        expect(title).toBeTruthy()
        const price = getByTestId("price")
        expect(price).toBeTruthy()
    })

    test("render go to cart button", function(){
        const {getByRole} = render(<MockProduct />)
        const goToCartBtn = getByRole("button", {name: /go to cart/i})
        expect(goToCartBtn).toBeTruthy()
    })
})