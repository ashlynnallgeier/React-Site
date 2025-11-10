import { useState, useEffect } from "react";
import "./App.css";

export default function ReactionGame() {
    const [color, setColor] = useState("red"); // starting color
    const [startTime, setStartTime] = useState(null);
    const [reactionTime, setReactionTime] = useState(null);
    const [bestTime, setBestTime] = useState(null);
    const [streak, setStreak] = useState(0);

    const colors = ["red", "blue", "yellow", "green"]; // green is clickable

    useEffect(() => {
        if (color !== "green") {
            const timeout = setTimeout(() => {
                // pick a random color
                const nextColor = colors[Math.floor(Math.random() * colors.length)];
                setColor(nextColor);
                if (nextColor === "green") setStartTime(Date.now());
            }, Math.random() * 3000 + 1000); // 1-4 seconds
            return () => clearTimeout(timeout);
        }
    }, [color]);

    function handleClick() {
        if (color === "green") {
            const time = Date.now() - startTime;
            setReactionTime(time);
            setColor("red"); // reset

            // Update best time
            if (!bestTime || time < bestTime) setBestTime(time);

            // Update streak
            if (time <= 500) {
                setStreak((prev) => prev + 1);
            } else {
                setStreak(0);
            }

            setTimeout(() => setReactionTime(null), 1000);
        } else {
            alert("Wait for green!");
            setColor("red");
            setReactionTime(null);
            setStreak(0);
        }
    }

    return (
        <div className="reaction-container">
            <div className={`reaction-box ${color}`} onClick={handleClick}>
                {reactionTime !== null ? `${reactionTime} ms` : "Click only on green!"}
            </div>
            <div className="stats">
                <p>Best Time: {bestTime !== null ? `${bestTime} ms` : "-"}</p>
                <p>Streak: {streak}</p>
            </div>
        </div>
    );
}
