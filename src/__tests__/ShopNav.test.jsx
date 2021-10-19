import * as React from "react"
import {render} from "@testing-library/react"
import { expect } from "chai"
import ShopNav from "../components/ecommerce/shopnav/ShopNav"

describe("<ShopNav>", ()=> {
    it("renders span element", ()=> {
        const {getByTestId} = render(<ShopNav/>);
        const spanElement = getByTestId("items-total")
        expect(document.body.contains(spanElement))
    })
})