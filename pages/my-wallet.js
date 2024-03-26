import React from "react";
import Link from "next/link";
import Image from "next/image";

import Style from "../styles/my-wallet.module.css";
import images from "../img";

const novcanik = () =>{
    return (
        <div className={Style.novcanik}>
            <h1>Vaši NFTi</h1>
            <div className={Style.novcanik_box}>
                <div className={Style.novcanik_box_nft}>
                    <Link href={{pathname: "/about-nft1"}}>
                        <Image src={images.prog1} width={200} height={200} className={Style.novcanik_box_nft_img}/>
                    </Link>
                    <Link href={{pathname: "/about-nft2"}}>
                        <Image src={images.baze} width={200} height={200} className={Style.novcanik_box_nft_img}/>
                    </Link>
                    <Link href={{pathname: "/about-nft3"}}>
                        <Image src={images.epos} width={200} height={200} className={Style.novcanik_box_nft_img}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default novcanik;