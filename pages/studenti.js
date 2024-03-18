import React from "react";

import Style from "../styles/studenti.module.css";
import Filter from "../components/Filter/Filter";
import Spisak from "../components/Spisak/Spisak";

const studenti = () =>{
    return <div>
        <Filter/>
        <Spisak/>
    </div>
}

export default studenti;