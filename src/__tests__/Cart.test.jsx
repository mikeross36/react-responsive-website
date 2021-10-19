import * as React from "react"
import {render} from "@testing-library/react"
import { expect } from "chai"
import Cart from "../components/ecommerce/cart/Cart"

describe("<Cart>", ()=> {
    it("renders aside element", ()=> {
        const {getByTestId} = render(<Cart/>);
        const asideElement = getByTestId("aside-element")
        expect(document.body.contains(asideElement))
    })
})