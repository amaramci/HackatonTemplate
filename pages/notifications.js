import React from "react";
import Image from "next/image";

import Style from "../styles/notifications.module.css";
import images from "../img";

const obavestenja = () =>{
    return (
        <div className={Style.obavestenja}>
            <h1>Obaveštenja</h1>
            <div className={Style.obavestenja_box}>
                <div className={Style.obavestenja_box_img}>
                    <Image src={images.user3} alt="profile image" width={150} height={150}
                    className={Style.obavestenja_box_img_img}/>
                </div>
                <div className={Style.obavestenja_box_info}>
                    <h2>Ime Prezime</h2>
                    <h3>Tekst neke poruke, obavestenja</h3>
                    <small>Pre 3 minuta...</small>
                </div>
                <span className={Style.obavestenja_box_new}></span>
            </div>
        </div>
    )
}

export default obavestenja;