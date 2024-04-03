import React from "react";
import Image from "next/image";

import Style from "../styles/kompanije.module.css";
import images from "../img";

const kompanije = () =>{

    return ( 
        <div className={Style.k}>
        <div className={Style.kompanije}>
            <div className={Style.kompanije_box}>
                <div className={Style.kompanije_box_image}>
                    <Image src={images.user3} alt="kompanija1" width={450} height={350} className={Style.kompanije_box_img}/>
                </div>
                <div className={Style.kompanije_box_info}>
                    <h2>Samsung</h2>
                </div>
            </div>
            <div className={Style.kompanije_box}>
                <div className={Style.kompanije_box_image}>
                    <Image src={images.user4} alt="kompanija2" width={450} height={350} className={Style.kompanije_box_img}/>
                </div>
                <div className={Style.kompanije_box_info}>
                    <h2>Apple</h2>
                </div>
            </div>
            <div className={Style.kompanije_box}>
                <div className={Style.kompanije_box_image}>
                    <Image src={images.user8} alt="kompanija3" width={450} height={350} className={Style.kompanije_box_img}/>
                </div>
                <div className={Style.kompanije_box_info}>
                    <h2>MVP Workshop</h2>
                </div>
            </div>
            <div className={Style.kompanije_box}>
                <div className={Style.kompanije_box_image}>
                    <Image src={images.user9} alt="kompanija4" width={450} height={350} className={Style.kompanije_box_img}/>
                </div>
                <div className={Style.kompanije_box_info}>
                    <h2>FON</h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default kompanije;