import "./App.css";

export default function App() {
    return (
        <div className="page">
            <div className="hero">
                <h1 className="title"> Explore the Art of Filmmaking</h1>
                <p className="subtitle">
                    Explore interactive lessons across design, film, and visual storytelling.
                    Choose a track below to begin learning!
                </p>
            </div>

            <div className="tracks">

                {/* Original Modules */}
                <div className="track-card">
                    <div className="emoji">🎨</div>
                    <h3>Color Theory</h3>
                    <p>Learn palettes, contrast, and how color shapes emotion.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">🔤</div>
                    <h3>Typography</h3>
                    <p>Understand fonts, hierarchy, and readability in design.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">🎬</div>
                    <h3>Film Composition</h3>
                    <p>Study framing, balance, and cinematic visual principles.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                {/* --- New FILM Modules --- */}

                <div className="track-card">
                    <div className="emoji">🎥</div>
                    <h3>Cinematography Basics</h3>
                    <p>Camera angles, shots, and movement to elevate visual storytelling.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">🎞️</div>
                    <h3>Shot Composition & Framing</h3>
                    <p>Master rule of thirds, symmetry, balance, and leading lines.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">💡</div>
                    <h3>Lighting for Film</h3>
                    <p>Use light to create mood, depth, and emphasis in any scene.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">🎛️</div>
                    <h3>Color Grading Essentials</h3>
                    <p>Shape tone and emotion with cinematic color grading techniques.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">🎤</div>
                    <h3>Sound Design 101</h3>
                    <p>Learn ambience, SFX, dialogue mixing, and audio storytelling.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">✂️</div>
                    <h3>Editing & Pacing</h3>
                    <p>Explore rhythm, transitions, and emotional timing in film editing.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">📝</div>
                    <h3>Screenwriting Fundamentals</h3>
                    <p>Write compelling stories with structure, conflict, and strong visuals.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">🎭</div>
                    <h3>Acting for Camera</h3>
                    <p>Study performance techniques, blocking, and emotional expression.</p>
                    <button className="track-button">Start Learning</button>
                </div>

                <div className="track-card">
                    <div className="emoji">📽️</div>
                    <h3>Directing & Visual Style</h3>
                    <p>How directors define tone, pacing, and cinematic identity.</p>
                    <button className="track-button">Start Learning</button>
                </div>

            </div>
        </div>
    );
}
