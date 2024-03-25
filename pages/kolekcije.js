import React from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "../styles/kolekcije.module.css";
import images from "../img";

const kolekcije = () =>{
    return (
        <div className={Style.kolekcije}>
            <div className={Style.kolekcije_box}>
                <div className={Style.kolekcije_box_box}>
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-programiranje1"}}>
                            <Image src={images.creatorbackground5} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Programiranje 1</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-elektronsko-poslovanje"}}>
                            <Image src={images.creatorbackground6} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Elektronsko poslovanje</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-osnove-kvaliteta"}}>
                            <Image src={images.creatorbackground6} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Osnove kvaliteta</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.creatorbackground5} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Menadžment</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default kolekcije;