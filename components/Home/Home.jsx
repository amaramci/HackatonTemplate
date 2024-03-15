import React from "react";
import Image from "next/image";

import Style from "./Home.module.css";
import images from "../../img";
import {Button} from "../componentsindex";

const Home = () =>{
    return(
        <div className={Style.home}>
            <div className={Style.home_box}>
                <div className={Style.home_box_left}>
                    <h1>Istražite svet NFTa</h1>
                    <p>Istražite mogućnosti NFTa i pronađite studente sa veštinama koje su Vam potrebne.</p>
                    <Button btnName="Istražite"/>
                </div>
                <div className={Style.home_box_right}>
                    <Image src={images.creatorbackground6} alt="Home" width={600} height={600}
                    className={Style.home_box_right_img}/>
                </div>
            </div>
        </div>
    )
}

export default Home;