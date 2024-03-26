import React from "react";
import Image from "next/image";

import Style from "./Spisak.module.css";
import images from "../../img";

const Spisak = () => {


    return(
        <div className={Style.spisak}>
            <div className={Style.spisak_box}>
                <div className={Style.spisak_box_img}>
                    <Image src={images.student_it} width={100} height={100} alt="Student" className={Style.spisak_box_img_img}/>
                    <div className={Style.spisak_box_img_info}>
                        <h3>Amar Mujezinović</h3>
                        <h4>am20200418@student.fon.bg.ac.rs</h4>
                        <h4>0x1271652184984</h4>
                    </div>
                </div>
                <div className={Style.spisak_box_img}>
                    <Image src={images.student_it} width={100} height={100} alt="Student" className={Style.spisak_box_img_img}/>
                    <div className={Style.spisak_box_img_info}>
                        <h3>Lazar Gošić</h3>
                        <h4>lg20200323@student.fon.bg.ac.rs</h4>
                        <h4>0x1215456585958</h4>
                    </div>
                </div>
                <div className={Style.spisak_box_img}>
                    <Image src={images.student_mndz} width={100} height={100} alt="Student" className={Style.spisak_box_img_img}/>
                    <div className={Style.spisak_box_img_info}>
                        <h3>Stela Mileusnić</h3>
                        <h4>sm20180100@student.fon.bg.ac.rs</h4>
                        <h4>0x1271688885887</h4>
                    </div>
                </div>
                <div className={Style.spisak_box_img}>
                    <Image src={images.student_mndz} width={100} height={100} alt="Student" className={Style.spisak_box_img_img}/>
                    <div className={Style.spisak_box_img_info}>
                        <h3>Đorđe Srećković</h3>
                        <h4>ds20200421@student.fon.bg.ac.rs</h4>
                        <h4>0x1271585184984</h4>
                    </div>
                </div>
                <div className={Style.spisak_box_img}>
                    <Image src={images.student_it} width={100} height={100} alt="Student" className={Style.spisak_box_img_img}/>
                    <div className={Style.spisak_box_img_info}>
                        <h3>Hena Arsić</h3>
                        <h4>ha20221056@student.fon.bg.ac.rs</h4>
                        <h4>0x1271652115487</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spisak;