import {render} from "@testing-library/react"
import Partners from "./Partners"

describe("Partners component testing", function(){
    test("should render partners title",function(){
        const {getByRole} = render(<Partners />)
        const title = getByRole("heading")
        expect(title).toHaveTextContent(/our partners/i)
    })
    
    test("should render 5 logo images", function(){
        const {getAllByRole} = render(<Partners />)
        const images = getAllByRole("img")
        expect(images).toHaveLength(5)
    })
})