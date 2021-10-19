import React, {useState} from "react"
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"
import Tabs from "./components/tabs/Tabs"
import Shop from "./components/ecommerce/shop/Shop"
import Slider from "./components/slider/Slider"
import Team from "./components/team/Team"
import Partners from "./components/partners/Partners"
import Subscribe from "./components/subscribe/Subscribe"
import Footer from "./components/footer/Footer"

export default function App(){
    const [showMobMenu, setShowMobMenu] = useState(false)
    const [tab, setTab] = useState(1)

    const toggleMobMenu = function(){
        setShowMobMenu(!showMobMenu)
    }

    const closeMobMenu = function(){
        setShowMobMenu(false)
    }

    const toggleTabs = function(index){
        setTab(index)
    }

    return (
        <>
            <Header 
                showMobMenu={showMobMenu}
                toggleMobMenu={toggleMobMenu}
                closeMobMenu={closeMobMenu}
            />
            <Banner />
            <Tabs 
                tab={tab}
                toggleTabs={toggleTabs}
            />
            <Shop />
            <Slider />
            <Team />
            <Partners />
            <Subscribe />
            <Footer />
        </>
    )
}