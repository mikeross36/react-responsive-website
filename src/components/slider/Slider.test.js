import {render} from "@testing-library/react"
import Slider from "./Slider"

describe("Slider component testing", function(){
    test("should render section title", function(){
        const {getByText} = render(<Slider />)
        const title = getByText(/user testimonials/i)
        expect(title).toBeTruthy()
    })

    test("should render all 5 slides", function(){
        const {getAllByRole} = render(<Slider />)
        const slides = getAllByRole("article")
        expect(slides).toHaveLength(5)
    })

    test("should render all 5 slide images", function(){
        const {getAllByRole} = render(<Slider />)
        const slides = getAllByRole("img")
        expect(slides).toHaveLength(5)
    })

    test("should render 2 slider nav button", function(){
        const {getAllByRole} = render(<Slider />)
        const navBtns = getAllByRole("button")
        expect(navBtns).toHaveLength(2)
    })
});