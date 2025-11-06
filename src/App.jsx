import { useState, useEffect } from "react";
import "./App.css";

export default function ReactionGame() {
    const [color, setColor] = useState("red"); // red = wait, green = click
    const [startTime, setStartTime] = useState(null);
    const [reactionTime, setReactionTime] = useState(null);
    const [bestTime, setBestTime] = useState(null);
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        if (color === "red") {
            // Random delay before turning green
            const timeout = setTimeout(() => {
                setColor("green");
                setStartTime(Date.now());
            }, Math.random() * 3000 + 1000); // 1-4 seconds
            return () => clearTimeout(timeout);
        }
    }, [color]);

    function handleClick() {
        if (color === "green") {
            const time = Date.now() - startTime;
            setReactionTime(time);
            setColor("red"); // reset color immediately

            // Update best time
            if (!bestTime || time < bestTime) setBestTime(time);

            // Update streak
            if (time <= 500) {
                setStreak((prev) => prev + 1);
            } else {
                setStreak(0); // reset streak if reaction > 500ms
            }

            // Reset displayed reaction time after 1 second
            setTimeout(() => setReactionTime(null), 1000);
        } else {
            alert("Wait for green!");
            setColor("red");
            setReactionTime(null); // reset text
            setStreak(0); // reset streak on early click
        }
    }

    return (
        <div className="reaction-container">
            <div className={`reaction-box ${color}`} onClick={handleClick}>
                {reactionTime !== null ? `${reactionTime} ms` : "Click when green"}
            </div>
            <div className="stats">
                <p>Best Time: {bestTime !== null ? `${bestTime} ms` : "-"}</p>
                <p>Streak: {streak}</p>
            </div>
        </div>
    );
}
