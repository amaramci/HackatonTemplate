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
                    <Link href={{pathname: "/about-programiranje1"}}>
                        <Image src={images.creatorbackground5} width={350} height={300} className={Style.kolekcije_box_box_img}/>
                    </Link>
                    <h2>Programiranje 1</h2>
                </div>
                <div className={Style.kolekcije_box_box}>
                    <Link href={{pathname: "/about-elektronsko-poslovanje"}}>
                        <Image src={images.creatorbackground6} width={350} height={300} className={Style.kolekcije_box_box_img}/>
                    </Link>
                    <h2>Elektronsko poslovanje</h2>
                </div>
                <div className={Style.kolekcije_box_box}>
                    <Link href={{pathname: "/about-osnove-kvaliteta"}}>
                        <Image src={images.creatorbackground6} width={350} height={300} className={Style.kolekcije_box_box_img}/>
                    </Link>
                    <h2>Osnove kvaliteta</h2>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <Link href={{pathname: "/about-menadzment"}}>
                        <Image src={images.creatorbackground5} width={350} height={300} className={Style.kolekcije_box_box_img}/>
                    </Link>
                    <h2>Menadžment</h2>
                </div>
            </div>
        </div>
    )
}

export default kolekcije;