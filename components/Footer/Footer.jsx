import React from "react";
import Image from "next/image";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiPhone,
    TiMail,
    TiLocation} 
from "react-icons/ti";
import {RiSendPlaneFill} from "react-icons/ri";

import Style from "./Footer.module.css";
import images from "../../img";

const Footer = () =>{
    return (
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                <div className={Style.footer_box_social}>
                    <Image src={images.logo} alt="Logo" width={100} height={100}/>
                    <p>Prva NFT platforma u Srbiji koja selektuje studente na osnovu njihovih vestina i znanja.</p>
                    <div className={Style.footer_box_social_icons}>
                        <a href="#">
                            <TiSocialFacebook/>
                        </a>
                    </div>
                    <div className={Style.footer_box_social_icons}>
                        <a href="#">
                            <TiSocialInstagram/>
                        </a>
                    </div>
                    <div className={Style.footer_box_social_icons}>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                    </div>
                    <div className={Style.footer_box_social_icons}>
                        <a href="#">
                            <TiSocialTwitter/>
                        </a>
                    </div>
                    <div className={Style.footer_box_social_icons}>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                    </div>
                </div>
                <div className={Style.footer_box_contact}>
                    <div className={Style.footer_box_contact_box}>
                        <div className={Style.footer_box_contact_box_items}>
                            <TiPhone/>
                            <p>+3816566666</p>
                        </div>
                        <div className={Style.footer_box_contact_box_items}>
                            <TiMail/>
                            <p>achievables@gmail.com</p>
                        </div>
                        <div className={Style.footer_box_contact_box_items}>
                            <TiLocation/>
                            <p>Ulica Nepoznata 254</p>
                        </div>
                    </div>
                </div>
                <div className={Style.footer_subscribe}>
                    <h3>Pretplatite se</h3>

                    <div className={Style.footer_subscribe_box}>
                        <input type="email" placeholder="Unesite Vaš email *" />
                        <RiSendPlaneFill className={Style.footer_subscribe_box_send} />
                    </div>
                    <div className={Style.footer_subscribe_box_info}>
                        <p>
                            Ostanite u toku sa svim desavanjima na nasoj platformi. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;