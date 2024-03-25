import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {AiOutlineUser} from "react-icons/ai";

import Style from "./NavBar.module.css";
import images from "../../img";
import {Kolekcije, Kompanije, Profil, Studenti, Studio} from "./index";

const NavBar = () =>{
    const [profil, setProfil] = useState(false);

    const router = useRouter();

    const openProfil = () => {
      setProfil(!profil);
    };
  
    useEffect(() => {
      const handleRouteChange = () => {
        setProfil(false); // Zatvara profil meni kada se putanja promeni
      };
  
      router.events.on("routeChangeComplete", handleRouteChange);
  
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.navbar_container_left_logo}>
                        <Link href={{pathname: "http://localhost:3000/"}}>
                            <Image src={images.hero} alt="logo" width={100} height={100} 
                            className={Style.navbar_container_left_logo_logo}/>
                        </Link>
                    </div>
                    <div className={Style.navbar_container_left_kolekcije_box}>
                        <div className={Style.navbar_container_left_kolekcije}>
                            <Link href={{pathname: "/kolekcije" }}>Kolekcije</Link>
                        </div>
                    </div>
                    <div className={Style.navbar_container_left_kompanije_box}>
                        <div className={Style.navbar_container_left_kompanije}>
                            <Link href={{pathname: "/kompanije" }}>Kompanije</Link>                        
                        </div>
                    </div>
                    <div className={Style.navbar_container_left_studenti_box}>
                        <div className={Style.navbar_container_left_studenti}>
                            <Link href={{pathname: "/studenti" }}>Studenti</Link>
                        </div>
                    </div>
                    <div className={Style.navbar_container_left_studio_box}>
                        <div className={Style.navbar_container_left_studio}>
                            <Link href={{pathname: "studio" }}>Studio</Link>
                        </div>
                    </div>
                </div>
                <div className={Style.navbar_container_right}>
                    <div className={Style.navbar_container_right_profil_box}>
                        <div className={Style.navbar_container_right_profil}>
                            <AiOutlineUser className={Style.navbar_container_right_profil_logo}
                            onClick={()=> openProfil()}/>
                            {profil && <Profil/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;