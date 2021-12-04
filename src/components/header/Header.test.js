import {render, screen, fireEvent} from "@testing-library/react"
import Header from "./Header"
import {BrowserRouter} from "react-router-dom"

const mockedToggleMobMenu = jest.fn()

const MockHeader = function({toggleMobMenu}){
    return(
        <BrowserRouter>
            <Header 
                toggleMobMenu={toggleMobMenu}
            />
        </BrowserRouter>
    )
};

describe("heading component testing", function(){
    test("should render header logo", function(){
        const {getByRole} = render(<MockHeader />)
        const h3Element = getByRole("heading")
        expect(h3Element).toBeTruthy()
    })

    test("should render mobile menu toggle", function(){
        render(
            <MockHeader 
                toggleMobMenu={mockedToggleMobMenu}
            />
        )
        const menuBtn = screen.getByRole("button")
        fireEvent.click(menuBtn)
        expect(mockedToggleMobMenu).toBeCalled()
    })

    test("should render desktop links", function(){
        const {getByTestId} = render(<MockHeader />)
        const deskLinks = getByTestId("desktop-links")
        expect(deskLinks).toBeTruthy()
    })
    
    test("should render mobile links", function(){
        const {getByTestId} = render(<MockHeader />)
        const mobLinks = getByTestId("mobile-links")
        expect(mobLinks).toBeTruthy()
    })
})