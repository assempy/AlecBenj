import './style.css';
import twelve_notes from './12notes.jpeg';
import A10 from './A10.jpeg';
import React from 'react';

function By_now_song() {
    const lyrics = [
        "Isn't it strange how nothing's changed?",
        "How it's been years and you're still in my brain",
        "How the wounds heal, but I still feel the pain",
        "Lately, I feel like I'm goin' insane",
        "You're the blue song on my red guitar",
        "Raindrop on my brand new car",
        "Roadblock on a fresh strip of highway",
        "On an otherwise sunny day",
        "You're that one speck of gray",
        "Only thing standing in my way",
        "Don't know what to do, should be over you",
        "By now (By now), by now (By now)",
        "Think I'm overdue, should be over you",
        "By now (By now), by now (By now)",
        "Don't know what to do, should be over you",
        "By now (By now), by now (By now)",
        "Think I'm overdue, should be over you by now (By now)",
        "Somehow, I'm still not over you by now",
        "Oh, some things change",
        "Oh, and some things, well, they just stay the same",
        "Like how my feelings for you still remain",
        "Lately, I feel like I'm goin' insane",
        "You're the blue song on my red guitar",
        "Raindrop on my brand new car",
        "Roadblock on a fresh strip of highway",
        "On an otherwise sunny day",
        "You're that one speck of gray",
        "Only thing standing in my way",
        "Don't know what to do, should be over you",
        "By now (By now), by now (By now)",
        "Think I'm overdue, should be over you",
        "By now (By now), by now (By now)",
        "Don't know what to do, should be over you",
        "By now (By now), by now (By now)",
        "Think I'm overdue, should be over you by now (By now)",
        "Somehow, I'm still not over you by now",
        "Da-da-do, da-da-do, da-da-do, do",
        "Da-da-do, da-da-do, da-da-do, do",
        "Da-da-do, da-da-do, da-da-do, da, dum, dum",
        "Somehow, I'm still not over you by now",
        "Da-da-do, da-da-do, da-da-do, do",
        "Da-da-do, da-da-do, da-da-do, do",
        "Da-da-do, da-da-do, da-da-do, da, dum, dum",
        "Somehow, I'm still not over you by now"
    ];

    return (
        <div className="ByNowSong">
            <div style={{ width: 1626, height: 1120 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={twelve_notes}
                        alt=""
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 500,
                            marginTop: 100
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>By Now</p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <React.Fragment key={id}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img 
                            src={A10} 
                            alt=""
                            style={{ width: 736, marginLeft: 155 }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default By_now_song;