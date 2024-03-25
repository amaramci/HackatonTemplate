import React from "react";
import Image from "next/image";

import Style from "./Spisak.module.css";
import images from "../../img";

const Spisak = () => {

    const spisakArray = [1,2,3,4,5];

    return(
        <div className={Style.spisak}>
            <div className={Style.spisak_box}>
                {spisakArray.map((el,i) => (
                <div className={Style.spisak_box_img}>
                    <Image src={images.nftimage1} width={100} height={100} alt="Student" className={Style.spisak_box_img_img} key={i+1}/>
                    <div className={Style.spisak_box_img_info}>
                        <h3>Ime Prezime</h3>
                        <h4>Mail@student.fon.bg.ac.rs</h4>
                        <h4>0x1271652184984</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Spisak;