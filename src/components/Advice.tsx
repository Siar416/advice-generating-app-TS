import { useState, useEffect } from "react";
import axios from "axios";
import dividerImg from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";

interface State {
    id: number | null;
    advice: string
}

const Advice : React.FC = () => {
    const [advice, setAdvice] = useState<State>({
        id: null,
        advice: ""
    });

    const fetchData = async (): Promise<any> => {
        const response : { data: { slip: { id: number, advice: string}} } = await axios.get("https://api.adviceslip.com/advice");
        setAdvice(response.data.slip)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = () => fetchData();
    

    if(!advice) {
        return <h1>Loading advice...</h1>
    }

    return (
        <div className="container">
            <h3 className="advice_heading">ADVICE # {advice.id}</h3>
            <p className="advice">"{advice.advice}"</p>

            <div className="bottom">
                <div className="divider">
                    <img src={dividerImg} alt="divider line" />
                </div>
                    <img onClick={handleClick} className="dice" src={dice} alt="advice" />
            </div>
        </div>
    )
}

export default Advice

