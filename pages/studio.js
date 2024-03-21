import React from "react";
import Image from "next/image";

import Style from "../styles/studio.module.css";
import images from "../img";

const studio = () =>{
    return (
        <div className={Style.studio}>
            <div className={Style.studio_box}>
                <div className={Style.studio_box_left}>
                    <div className={Style.studio_box_left_info}>
                        <h2>Create an NFT</h2>
                        <h4>Once your item is minted you will not be able to change any of its information.</h4>
                    </div>
                    <div className={Style.studio_box_left_import}>
                        <Image src={images.nftimage1} width={600} height={600} className={Style.studio_box_left_import_img}/>
                    </div>
                </div>
                <div className={Style.studio_box_right}>
                    <div className={Style.studio_box_right_text}>
                        <h3>Collection *</h3>
                        <input type="collection" placeholder="Create a new collection"/>
                        <h3>Name *</h3>
                        <input type="name" placeholder="Name your NFT"/>
                        <h3>Supply *</h3>
                        <input type="supply" placeholder="1"/>
                        <h3>Description</h3>
                        <input type="description" placeholder="Enter a description"/>
                        <h3>External link</h3>
                        <input type="link" placeholder="https://collection.io/item/123"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default studio;