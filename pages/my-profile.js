import React from "react";
import Link from "next/link";
import Image from "next/image";

import Style from "../styles/my-profile.module.css";
import images from "../img";

const profil = () =>{
    return (
        <div className={Style.profil}>
            <div className={Style.profil_box}>
                <div className={Style.profil_box_info}>
                    <h2>Ime Prezime</h2>
                    <h4>0x135131876134506168145176486167849</h4>
                </div>
                <div className={Style.profil_box_nft}>
                    <Link href={{pathname: "/my-wallet"}}>
                        <Image src={images.nftimage2} width={300} height={300} className={Style.profil_box_nft_img}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default profil;