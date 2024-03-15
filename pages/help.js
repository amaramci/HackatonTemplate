import React from "react";

import Style from "../styles/help.module.css";

const pomoc = () =>{
    return (
        <div className={Style.pomoc}>
            <h1>Pomoć</h1>
            <h3>Česta pitanja</h3>
            <div className={Style.pomoc_box}>
                <div className={Style.pomoc_box_pitanje}>
                    <h4>Šta je NFT?</h4>
                </div>
                <div className={Style.pomoc_box_odgovor}>
                    <p>NFT je jedinstveni token zabeležen na blokčejn mreži koji je za svakog studenta i 
                        za svaku savladanu veštinu i znanje jedinstven.
                    </p>
                </div>
                <div className={Style.pomoc_box_pitanje}>
                    <h4>Kako mogu videti svoju kolekciju NFTa?</h4>
                </div>
                <div className={Style.pomoc_box_odgovor}>
                    <p>Vašu kolekciju NFTa možete pronaći na stranici Profil.</p>
                </div>
                <div className={Style.pomoc_box_pitanje}>
                    <h4>Gde mogu videti uslove za dobijanje NFTa?</h4>
                </div>
                <div className={Style.pomoc_box_odgovor}>
                    <p>Uslovi za dobijanje svakog NFTa se nalaze na stranici predmeta fakulteta.</p>
                </div>
                <div className={Style.pomoc_box_pitanje}>
                    <h4>Kako mogu prodati svoj NFT?</h4>
                </div>
                <div className={Style.pomoc_box_odgovor}>
                    <p>Vaš NFT ne možete prodati. Cilj ove vrste NFTa nije zarada novca, već dokazivanje Vaših znanja.</p>
                </div>
            </div>
            <div className={Style.pomoc_kontakt}>
                <div className={Style.pomoc_kontakt_box}>
                    <h3>Za dodatna pitanja nas kontaktirajte putem maila achievables@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default pomoc;