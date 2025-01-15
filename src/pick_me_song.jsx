import './style.css';
import twelve_notes from './12notes.jpeg';
import A5 from './A5.jpeg';
import React from 'react';

function Pick_me_song() {
    const lyrics = [
        "Is it lying if I add a couple inches to my height?",
        "Say I'm 5'11\" when I'm really just 5'9\"",
        "Am I trying too hard, tell me, with these tired pickup lines?",
        "Baby, when you fell from Heaven, did it hurt or are you fine?",
        "We can say that we met at a party",
        "Or at the park or through our friend Charlie",
        "Something we'll probably forget",
        "And then have to make up again",
        "We can say that we met doing yoga",
        "Or at the coffee shop over mochas",
        "Something we'll probably forget",
        "And then have to make up again",
        "Pick me if you need a guy within a hundred miles",
        "Who likes tea, is a Gemini, has family in Ohio",
        "Is free this Friday night and just might make you smile",
        "I know there's other fish in the sea",
        "But pick me",
        "Is it lying if I tell you that I went to USC",
        "Even though I didn't graduate and had a 2.3?",
        "Am I trying too hard, tell me, if I say you've got to be",
        "The most flawless specimen? You're better than I've ever seen",
        "We can say that we met at a party",
        "Or at the park or through our friend Charlie",
        "Something we'll probably forget",
        "And then have to make up again",
        "We can say that we met doing yoga",
        "Or at the coffee shop over mochas",
        "Something we'll probably forget",
        "And then have to make up again",
        "Pick me if you need a guy within a hundred miles",
        "Who likes tea, is a Gemini, has family in Ohio",
        "Is free this Friday night and just might make you smile",
        "I know there's other fish in the sea",
        "But pick me",
        "But pick me, mmh",
        "I'm here waiting, undeterred",
        "My heart is aching, but still no word",
        "Pick me if you need a guy within a hundred miles",
        "Who likes tea, is a Gemini, has family in Ohio",
        "Is free this Friday night and just might make you smile",
        "I know there's other fish in the sea",
        "But pick me",
        "But pick me, mmh"
    ];

    return (
        <div className="PickMeSong">
            <div style={{ width: 1626, height: 1100 }}>
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
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>Pick Me</p>
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
                        <img src={A5} alt="" style={{ width: 450, marginLeft: 255 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pick_me_song;