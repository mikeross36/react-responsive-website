import {render, screen, fireEvent} from "@testing-library/react"
import Tabs from "./Tabs"

const mockToggleTabs = jest.fn()

describe("Tabs component testing", function(){
    test("should render 4 titles, 3 tabs, 3 tab buttons, 3 explore buttons, 3 outside links", function(){
        const {getAllByRole} = render(<Tabs />)
        const titles = getAllByRole("heading")
        expect(titles).toHaveLength(4)
        const tabs = getAllByRole("article")
        expect(tabs).toHaveLength(3)
        const tabBtns = getAllByRole("button")
        expect(tabBtns).toHaveLength(6)
        const links = getAllByRole("link")
        expect(links).toHaveLength(3)
    })

    test("should toggle tabs by clicking on buttons", function(){
        render(
            <Tabs toggleTabs={mockToggleTabs} />
        )
        const btn1 = screen.getByRole("button", {name: /doctors/i})
        fireEvent.click(btn1)
        expect(mockToggleTabs).toBeCalled()
        const btn2 = screen.getByRole("button", {name: /reality/i})
        fireEvent.click(btn2)
        expect(mockToggleTabs).toBeCalled()
        const btn3 = screen.getByRole("button", {name: /people/i})
        fireEvent.click(btn3)
        expect(mockToggleTabs).toBeCalled()
    })
})