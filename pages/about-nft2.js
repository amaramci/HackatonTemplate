import React from "react";
import Image from "next/image";

import Style from "../styles/about-nft1.module.css";
import images from "../img";

const About = () => {
    return(
        <div className={Style.about}>
            <div className={Style.about_box}>
                <div className={Style.about_box_left}>
                    <Image src={images.baze} width={600} height={600} className={Style.about_box_left_img}/>
                </div>
                <div>
                    <div className={Style.about_box_right}>
                        <h3>ID: 4</h3>
                        <h3>Predmet:Baze podataka</h3>
                        <h3>Profesor: Milica Škembarević</h3>
                        <h3>Veštine: SQL, PMOV, MongoDB</h3>
                        <h3>Grupa predmeta: Programski</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;