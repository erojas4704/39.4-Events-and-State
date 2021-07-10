import { useState } from "react";
import { getRandomFromArray } from "./helpers";
import "./EightBall.css"

const EightBall = ({ answers }) => {
    const restart = () => {
        setText("Think of a question");
        setRevealed(false);
        setColor("black");
    }

    const [text, setText] = useState("Think of a question");
    const [revealed, setRevealed] = useState(false);
    const [color, setColor] = useState("black");


    const clickHandler = e => {
        if (revealed) return;

        setRevealed(true);
        const { color, msg } = getRandomFromArray(answers);
        setText(msg);
        setColor(color);
        console.log(color);
    };

    return (
        <>
            <div onClick={clickHandler}
                className={`eight-ball`}
                style={{ backgroundColor: color }}>
                {text}
            </div>
            {revealed && <button onClick={restart}>Restart</button>}
        </>
    )
};

export default EightBall;