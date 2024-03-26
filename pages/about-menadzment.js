import React from "react";
import Image from "next/image";

import Style from "../styles/about-kolekcija.module.css"
import images from "../img";

const AboutKolekcija = () =>{
    return(
        <div className={Style.about}>
            <div className={Style.about_box}>
                <Image src={images.mndz} width={200} height={200} className={Style.about_box_img}/>
                <Image src={images.mndz} width={200} height={200} className={Style.about_box_img}/>
                <Image src={images.mndz} width={200} height={200} className={Style.about_box_img}/>
            </div>
        </div>
    )
}

export default AboutKolekcija;