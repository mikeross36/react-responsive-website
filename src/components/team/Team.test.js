import {render} from "@testing-library/react"
import Team from "./Team"

describe("tema component testing", function(){
    test("render component title", function(){
        const {getByText} = render(<Team />)
        const title = getByText(/our team/i)
        expect(title).toBeTruthy()
    })

    test("should render 4 team members", function(){
        const {getAllByRole} = render(<Team />)
        const members = getAllByRole("article")
        expect(members).toHaveLength(4)
        const images = getAllByRole("img")
        expect(images).toHaveLength(4)
    })
})