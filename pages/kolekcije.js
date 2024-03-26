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
                            <Image src={images.prog1} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Programiranje 1</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-elektronsko-poslovanje"}}>
                            <Image src={images.epos} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Elektronsko poslovanje</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-osnove-kvaliteta"}}>
                            <Image src={images.baze} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Baze podataka</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.ekonomija} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Ekonomija</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.mata1} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Matematika 1</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.mata2} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Matematika 2</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.psiho} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Psihologija</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.stat} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Statistika</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.vestacka} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Veštačka inteligencija</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.zavrsni} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Završni rad</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.mndz} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Menadžment</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.principi} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Principi programiranja</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.hakaton} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Hackaton bootcamp</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.kurs_bootcamp} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Bootcamp kurs</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.student_mndz} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Studenti menadžment</h2>
                    </div>
                </div>
                <div className={Style.kolekcije_box_box}>  
                    <div className={Style.kolekcije_box_box_image}>
                        <Link href={{pathname: "/about-menadzment"}}>
                            <Image src={images.student_it} width={450} height={350} className={Style.kolekcije_box_box_img}/>
                        </Link>
                    </div>
                    <div className={Style.kolekcije_box_box_info}>
                        <h2>Studenti IT</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default kolekcije;