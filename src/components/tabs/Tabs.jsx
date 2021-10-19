import React from "react"
import MainBtn from "../mainbtn/MainBtn"
import drHouse1 from "../../../public/images/dr-house-glowe.png"
import drHouse2 from "../../../public/images/dr-house-brain.png"
import drHouse3 from "../../../public/images/house-chem.png"

export default function Tabs({tab, toggleTabs}){
    return (
        <section className="tabs" >
            <div className="container" id="tabs">
                <div className="tabs-header">
                    <h3>quotes and sayings from doctor house</h3>
                    <p>
                        For years, Dr. House imparted wisdom not only to those in his
                        office, but also to us, the audience, watching him be a snarky,
                        grumpy old man.
                    </p>
                </div>
                {/*  */}
                <div className="tabs-btn-box">
                    <button 
                        className={`btn1 ${tab === 1 && "active-tab"}`}
                        onClick={function(){
                            toggleTabs(1)
                        }}>Doctors</button>
                    <button 
                        className={`btn2 ${tab === 2 && "active-tab"}`}
                        onClick={function(){
                            toggleTabs(2)
                        }}>Reality</button>
                    <button 
                        className={`btn3 ${tab === 3 && "active-tab"}`}
                        onClick={function(){
                            toggleTabs(3)
                        }}>People</button>
                </div>
                {/*  */}
                <article className={`tabs-content content1 ${tab === 1 && "active-content"}`}>
                    <div className="content-left">
                        <h3>I solved the case my work is done</h3>
                        <blockquote>
                            "We treat the patient. If she or he gets better we know that we're
                            right. Our bodies break down, sometimes when we're 90, sometimes
                            before we're even born, but it always happens and there's never
                            any dignity in it. I don't care if you can walk, see, wipe your own 
                            ass. It's always ugly." 
                        </blockquote>
                        <a href="https://quotecatalog.com/communicator/dr-gregory-house"
                            target="_blank"
                            rel="noreferrer">
                            <MainBtn/>
                        </a>
                    </div>
                    {/*  */}
                    <div className="content-right">
                        <img src={drHouse1} alt="dr house" />
                    </div>
                </article>
                {/*  */}
                <article className={`tabs-content content2 ${tab === 2 && "active-content"}`}>
                    <div className="content-left">
                        <h3>Reality is almost allways wrong</h3>
                        <blockquote>
                            "Everybody lies. I don't ask why patients lie, I just assume they
                            all do. It's a basic truth of the human condition that everybody
                            lies. Truth begins in lies. I've found that when you want to know
                            the truth about someone that someone is probably the last person
                            you should ask."
                        </blockquote>
                        <a href="https://quotecatalog.com/communicator/dr-gregory-house"
                            target="_blank"
                            rel="noreferrer">
                            <MainBtn/>
                        </a>
                    </div>
                    <div className="content-right">
                        <img src={drHouse2} alt="dr house" />
                    </div>
                </article>
                {/*  */}
                <article className={`tabs-content content3 ${tab === 3 && "active-content"}`}>
                    <div className="content-left">
                        <h3>Everybody does stupid things</h3>
                        <blockquote>
                            "Humanity is overrated. People like talking about people. Makes us
                            feel superior. Makes us feel in control. And sometimes, for some
                            people, knowing some things makes them care. We all make mistakes,
                            and we all pay a price. Men are pigs. They will, pretty much have 
                            sex with anyone, fat, skinny, married, single, complete strangers, 
                            relatives."
                        </blockquote>
                        <a href="https://quotecatalog.com/communicator/dr-gregory-house"
                            target="_blank"
                            rel="noreferrer">
                            <MainBtn />
                        </a>
                    </div>
                    <div className="content-right">
                        <img src={drHouse3} alt="dr house" />
                    </div>
                </article>
            </div>
        </section>
    )
}