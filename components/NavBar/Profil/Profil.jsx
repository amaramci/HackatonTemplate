import React from "react"; 
import Link from "next/link";
import {AiOutlineWallet, AiOutlineNotification, AiOutlineSetting, AiOutlineAlert, AiOutlineUser} from "react-icons/ai";

import Style from "./Profil.module.css";

const Profil = () =>{
    return (
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <div className={Style.profile_account_info}>
                    <p>Amar Mujezinović</p>
                    <small>0x135131876134506168145176486167849</small>
                </div>
            </div>
            <div className={Style.profile_menu}> 
                <div className={Style.profile_menu_box}>
                    <div className={Style.profile_menu_box_item}>
                        <AiOutlineUser/>
                        <p>
                            <Link href={{ pathname:"/my-profile"}}>Profil</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_box_item}>
                        <AiOutlineWallet/>
                        <p>
                            <Link href={{ pathname:"/my-wallet"}}>Novčanik</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_box_item}>
                        <AiOutlineSetting/>
                        <p>
                            <Link href={{ pathname:"/settings"}}>Podešavanja</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_box_item}>
                        <AiOutlineNotification/>
                        <p>
                            <Link href={{ pathname:"/notifications"}}>Obaveštenja</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_box_item}>
                        <AiOutlineAlert/>
                        <p>
                            <Link href={{ pathname:"/help"}}>Pomoć</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;