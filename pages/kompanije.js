import React from "react";
import Image from "next/image";

import Style from "../styles/kompanije.module.css";
import images from "../img";

const kompanije = () =>{

    return (
        <div className={Style.kompanije}>
            <div className={Style.kompanije_box}>
                <Image src={images.user3} alt="kompanija1" width={200} height={200} className={Style.kompanije_box_img}/>
                <h2>Samsung</h2>
            </div>
            <div className={Style.kompanije_box}>
                <Image src={images.user4} alt="kompanija2" width={200} height={200} className={Style.kompanije_box_img}/>
                <h2>Apple</h2>
            </div>
            <div className={Style.kompanije_box}>
                <Image src={images.user8} alt="kompanija3" width={200} height={200} className={Style.kompanije_box_img}/>
                <h2>FD</h2>
            </div>
            <div className={Style.kompanije_box}>
                <Image src={images.user9} alt="kompanija4" width={200} height={200} className={Style.kompanije_box_img}/>
                <h2>FON</h2>
            </div>
        </div>
    )
}

export default kompanije;