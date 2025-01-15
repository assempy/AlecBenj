import './style.css';
import twelve_notes from './12notes.jpeg';
import A8 from './A8.jpeg';
import React from 'react';

function The_arsonist_song() {
    const lyrics = [
        "I threw away the evidence and every little trace",
        "By now, it should be evident that I'm the one to blame",
        "I own the conflagration, it was I who lit the flame",
        "And I flushed all of my matches down the drain",
        "Oh, I know there's no excuse for what I did",
        "So, the only thing I can do is admit",
        "I was the arsonist",
        "The one who burned us to the ground after the argument",
        "Set fire to the room with our hearts in it",
        "And though I said that you're the one who started it, I started it",
        "I was the arsonist",
        "But now I'll make it up to you for all the darkness",
        "For everything I put you through, let me start with this",
        "I started it",
        "Now I'll build back that room with our hearts in it",
        "I was the arsonist",
        "Dum-dum, dum-dum, dum-dum, dum-dum, da-dam-dum",
        "I'm siftin' through the rubbles and the ashes all around",
        "Liftin' with my shovel as it crashes through the ground",
        "I'm reminded that the trouble, all the trouble that surrounds",
        "Is my fault and I'm here to fix it now",
        "Oh, I know there's no excuse for what I did",
        "So, the only thing I can do is admit",
        "I was the arsonist",
        "The one who burned us to the ground after the argument",
        "Set fire to the room with our hearts in it",
        "And though I said that you're the one who started it, I started it",
        "I was the arsonist",
        "But now I'll make it up to you for all the darkness",
        "For everything I put you through, let me start with this",
        "I started it",
        "Now I'll build back that room with our hearts in it",
        "I was the arsonist",
        "Dum-dum, dum-dum, dum-dum, dum-dum, da-dam-dum",
        "I was the arsonist",
        "Dum-dum, dum-dum, dum-dum, dum-dum, da-dam-dum",
        "I'll pay the fine, do the time, leave that person behind",
        "Burn away the past and move past all my crime",
        "I was the arsonist",
        "The one who burned us to the ground after the argument",
        "Set fire to the room with our hearts in it",
        "And though I said that you're the one who started it, I started it",
        "I was the arsonist",
        "But now I'll make it up to you for all the darkness",
        "For everything I put you through, let me start with this",
        "I started it",
        "Now I'll build back that room with our hearts in it",
        "I was the arsonist",
        "Dum-dum, dum-dum, dum-dum, dum-dum, da-dam-dum",
        "I was the arsonist",
        "Dum-dum, dum-dum, dum-dum, dum-dum, da-dam-dum"
    ];

    return (
        <div className="TheArsonistSong">
            <div style={{ width: 1626, height: 1300 }}>
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
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        The Arsonist
                    </p>
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
                            src={A8} 
                            alt=""
                            style={{ width: 736, marginLeft: 155 }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default The_arsonist_song;