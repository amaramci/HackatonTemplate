import React from "react";
import Link from "next/link";
import Image from "next/image";

import Style from "../styles/my-wallet.module.css";
import images from "../img";

const novcanik = () =>{
    return (
        <div className={Style.novcanik}>
            <div className={Style.novcanik_box}>
                <div className={Style.novcanik_box_info}>
                    <h2>Ime Prezime</h2>
                    <h4>0x135131876134506168145176486167849</h4>
                </div>
                <div className={Style.novcanik_box_nft}>
                    <h3>
                        <Image src={images.nftimage1} className={Style.novcanik_box_nft_img} width={600} height={600} alt="NFT"/> 
                        <Link href={{pathname: "/my-profile"}}>+ 7 NFTa</Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default novcanik;