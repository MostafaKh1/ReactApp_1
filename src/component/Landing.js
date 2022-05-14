import React from "react"
import Company1 from "../images/client-databiz.svg"
import Company2 from "../images/client-audiophile.svg"
import Company3 from "../images/client-meet.svg"
import Company4 from "../images/client-maker.svg"
import LandingImg from "../images/image-hero-desktop.png"


export default function Landing () {


    return (
        <section className="landing">
            <div className="container">
                <div className="box-one">
                    <h1>Make <br /> remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                     <a href="#">Learn more</a>
                    <div className="companys">
                        <img src={Company1} alt="databiz" />     
                        <img src={Company2} alt="audiophile" />     
                        <img src={Company3} alt="meet" />     
                        <img src={Company4} alt="maker" />     
                    </div>
                </div>
                <div className="box-two">
                        <img src={LandingImg} />
                </div>
            </div>
        </section>
    )
}