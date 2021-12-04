import {render} from "@testing-library/react"
import Footer from "./Footer"

describe("footer component testing", function(){
    test("shoud render footer logo", function(){
        const {getByText} = render(<Footer />)
        const logo = getByText(/company logo here/i)
        expect(logo).toBeTruthy()
    })

    test("should render contact phone, email & addrress", function(){
        const {getByText} = render(<Footer />)
        const phone = getByText("+381 66 22 33 77")
        expect(phone).toBeTruthy()
        const email = getByText(/someemail@email.com/i)
        expect(email).toBeTruthy()
        const address = getByText(/Some Address 125 Novi Sad/i)
        expect(address).toBeTruthy()
    })

    test("should render divs with footer links", function(){
        const {getAllByTestId} = render(<Footer />)
        const footerLink = getAllByTestId("footer-link")
        expect(footerLink.length).toBe(2)
    })

    test("should render copyright", function(){
        const {getByTestId} = render(<Footer />)
        const copyright = getByTestId("copyright")
        expect(copyright).toContainHTML("p")
    })
});