import { useState, useEffect } from "react";
import axios from "axios";
import dividerImg from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";

const Advice = () => {
    return (
        <div className="container">
            <h3 className="advice_heading">ADVICE #</h3>
            <p className="advice"></p>

            <div className="bottom">
                <div className="divider">
                    <img src={dividerImg} alt="divider line" />
                </div>
                    <img className="dice" src={dice} alt="advice" />
            </div>
        </div>
    )
}

export default Advice

