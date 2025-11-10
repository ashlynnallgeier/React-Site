import { useState, useEffect } from "react";
import "./App.css";

export default function ReactionGame() {
    const [color, setColor] = useState("red"); // red = wait, green = click
    const [startTime, setStartTime] = useState(null);
    const [reactionTime, setReactionTime] = useState(null);
    const [bestTime, setBestTime] = useState(null);
    const [streak, setStreak] = useState(0);

    // For extra reaction stats
    const [totalReactions, setTotalReactions] = useState(0);
    const [sumReactionTime, setSumReactionTime] = useState(0);

    const extraColors = ["blue", "yellow", "purple"]; // extra colors to flash before green

    useEffect(() => {
        if (color === "red") {
            const shouldFlashExtra = Math.random() < 0.5; // 50% chance
            if (shouldFlashExtra) {
                const flashSequence = [];
                const flashes = Math.floor(Math.random() * 2) + 1; // 1 or 2 flashes
                for (let i = 0; i < flashes; i++) {
                    flashSequence.push(extraColors[Math.floor(Math.random() * extraColors.length)]);
                }
                flashSequence.push("green"); // always end with green

                let index = 0;
                const flashNext = () => {
                    setColor(flashSequence[index]);
                    if (flashSequence[index] === "green") setStartTime(Date.now());
                    index++;
                    if (index < flashSequence.length) {
                        setTimeout(flashNext, 500);
                    }
                };
                setTimeout(flashNext, Math.random() * 2000 + 500);
            } else {
                const timeout = setTimeout(() => {
                    setColor("green");
                    setStartTime(Date.now());
                }, Math.random() * 3000 + 1000);
                return () => clearTimeout(timeout);
            }
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
            if (time <= 500) setStreak((prev) => prev + 1);
            else setStreak(0);

            // Update extra reaction stats
            setTotalReactions((prev) => prev + 1);
            setSumReactionTime((prev) => prev + time);

            setTimeout(() => setReactionTime(null), 1000);
        } else {
            alert("Wait for green!");
            setColor("red");
            setReactionTime(null);
            setStreak(0);
        }
    }

    const averageReaction =
        totalReactions > 0 ? Math.round(sumReactionTime / totalReactions) : "-";

    return (
        <div className="reaction-container">
            <div className={`reaction-box ${color}`} onClick={handleClick}>
                {reactionTime !== null ? `${reactionTime} ms` : "Click when green"}
            </div>
            <div className="stats">
                <p>Best Time: {bestTime !== null ? `${bestTime} ms` : "-"}</p>
                <p>Streak: {streak}</p>
                <p>Average Reaction: {averageReaction !== "-" ? `${averageReaction} ms` : "-"}</p>
            </div>
        </div>
    );
}
