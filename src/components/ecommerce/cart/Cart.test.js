import {render, screen} from "@testing-library/react"
import Cart from "./Cart"
import AppProvider from "../../../StateManager/AppProvider"

const mockedCartItems = jest.fn()
const mockedIncrease = jest.fn()

const CartRender = function(){
    return render(
        <AppProvider>
            <Cart 
                cartItems={mockedCartItems} 
                increase={mockedIncrease}          
            />
        </AppProvider>
    )
};

describe("testing cart component", function(){
    test("should render sidebar with close button & title", function(){
        CartRender()
        expect(screen.getByTestId("aside")).toBeTruthy()
        expect(screen.getByRole("button")).toHaveTextContent(/close/i)
        expect(screen.getByText(/your cart/i)).toBeTruthy()
    })
});