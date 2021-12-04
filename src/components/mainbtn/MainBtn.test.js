import {render} from "@testing-library/react"
import MainBtn from "./MainBtn"

describe("MainBtn component testing", function(){
    test("should render main button", function(){
        const {getByRole} = render(<MainBtn />)
        const mainBtn = getByRole("button")
        expect(mainBtn).toHaveTextContent(/explore/i)
    })
});