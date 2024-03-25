import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import Style from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState(false);
  const [p1, setP1] = useState(true);
  const [ok, setOk] = useState(true);
  const [epos, setEpos] = useState(true);
  const [mndz, setMndz] = useState(true);
  const [sol, setSol] = useState(true);
  const [hackaton, setHackaton] = useState(true);

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openP1 = () => {
    if (!p1) {
      setP1(true);
    } else {
      setP1(false);
    }
  };

  const openOk = () => {
    if (!ok) {
      setOk(true);
    } else {
      setOk(false);
    }
  };

  const openEpos = () => {
    if (!epos) {
        setEpos(true);
    } else {
        setEpos(false);
    }
  };

  const openMndz = () => {
    if (!mndz) {
        setMndz(true);
    } else {
        setMndz(false);
    }
  };

  const openSol = () => {
    if (!sol) {
        setSol(true);
    } else {
        setSol(false);
    }
  };

  const openHackaton = () => {
    if (!hackaton) {
        setHackaton(true);
    } else {
        setHackaton(false);
    }
  };

  return (
    <div className={Style.filter}>
      <div className={Style.filter_box}>
        <div className={Style.filter_box_right}>
          <div
            className={Style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span> {filter ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
      </div>

      {filter && (
        <div className={Style.filter_box_items}>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item}>
              <h3>Formalna znanja</h3>
            </div>
          </div>

          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openP1()}
            >
              <small>Programiranje 1</small>
              {p1 ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openOk()}
            >
              <small>Osnove kvaliteta</small>
              {ok ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openEpos()}
            >
              <small>Elektronsko poslovanje</small>
              {epos ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openMndz()}
            >
              <small>Menadžment</small>
              {mndz ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item}>
              <h3>Neformalna znanja</h3>
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openSol()}
            >
              <small>Solidity</small>
              {sol ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openHackaton()}
            >
              <small>Hackaton</small>
              {hackaton ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>  
        </div>
      )}
    </div>
  );
};

export default Filter;