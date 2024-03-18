import React from "react";
import Image from "next/image";

import Style from "../styles/about-kolekcija.module.css"
import images from "../img";

const AboutKolekcija = () =>{
    return(
        <div className={Style.about}>
            <div className={Style.about_box}>
                <Image src={images.nftimage1} width={200} height={200} className={Style.about_box_img}/>
                <Image src={images.nftimage2} width={200} height={200} className={Style.about_box_img}/>
                <Image src={images.nftimage3} width={200} height={200} className={Style.about_box_img}/>
            </div>
        </div>
    )
}

export default AboutKolekcija;