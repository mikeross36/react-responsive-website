import {render} from "@testing-library/react"
import Banner from "./Banner"

describe("component testing", function(){
    test("render correct components title", function(){
        const {getByText} = render(<Banner />)
        const title = getByText("It's a simple and responsive website")
        expect(title).toBeTruthy()
    })

    test("render wrapper div with background image", function(){
        const {getByTestId} = render(<Banner />)
        const wrapper = getByTestId("wrapper")
        expect(wrapper).toBeInTheDocument()
    })
});