import './style.css';
import two_wind from './2wind.jpeg';
import B2 from './B2.jpg';
import React from 'react';

function Demons_song() {
    const lyrics = [
        "I've got all these demons hiding underneath",
        "Nobody can see them, nobody but me, and you're the reason",
        "The only thing that keeps me from diving off the deep end",
        "Because I've got all these demons, demons, demons, hmm",
        "Well, at first I thought I had to bear this weight by myself",
        "But when my knees were getting weak, and I was in need of help",
        "You were there to take away the pain that I felt, hmm",
        "You're the only one that gave me hope",
        "You're the only one who really knows",
        "I've got all these demons hiding underneath",
        "Nobody can see them, nobody but me, and you're the reason",
        "The only thing that keeps me from diving off the deep end",
        "Because I've got all these demons, demons, demons, hmm",
        "For a moment I thought maybe I was doing alright",
        "So I took your love for granted and I left you behind",
        "I just didn't understand you were what kept me alive, hmm",
        "You forgave me and you gave me hope",
        "Still, you're the only one who really knows",
        "I've got all these demons hiding underneath",
        "Nobody can see them, nobody but me, and you're the reason",
        "The only thing that keeps me from diving off the deep end",
        "Because I've got all these demons, demons, demons, hmm",
        "It's you, you pull me through it on the days when I have doubts",
        "Even when I turned my back on you, you never let me down",
        "And even when I hit the bottom, no, you didn’t let me drown",
        "No, oh",
        "I've got all these demons hiding underneath",
        "Nobody can see them, nobody but me, and you're the reason",
        "The only thing that keeps me from diving off the deep end",
        "Because I've got all these demons, demons, demons, hmm",
        "Because I've got all these demons, demons, demons, hmm"
    ];

    return (
        <div className="Demons">
            <div style={{ width: 1626, height: 900 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={two_wind}
                        alt=""
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 500,
                            marginTop: 100
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>Demons</p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <span key={id}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img src={B2} alt="" style={{ width: 550, marginLeft: 155 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demons_song;            