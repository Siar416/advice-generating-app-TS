import { useState, useEffect } from "react";
import axios from "axios";
import dividerImg from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";

const Advice = () => {
    const [advice, setAdvice] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://api.adviceslip.com/advice");
            setAdvice(response.data.slip)
        }

        fetchData();
    }, []);

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

