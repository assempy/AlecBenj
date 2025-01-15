import './style.css';
import two_wind from './2wind.jpeg';
import B3 from './B3.jpeg';
import React from 'react';

function Oh_my_god_song() {
    const lyrics = [
        "Looking at the pictures I keep on my shelf",
        "Cause it's been so long since I've looked like myself",
        "Burn another candle down",
        "Burn another candle down",
        "Running low on patience, running low on fumes",
        "I'm never gonna make it halfway to the moon",
        "But it's too late to turn around",
        "But it's too late to turn around",
        "I'm running out of oxygen",
        "I'll never be the same again now",
        "Same again now",
        "Oh my god, I can't remember",
        "Who I was just last December",
        "What have I done, how did I get here?",
        "What have I done?",
        "Oh my god, look in the mirror",
        "I was young, nothing to fear once",
        "What have I done, how did I get here?",
        "What have I done?",
        "Maybe I was foolish, I guess I was naive",
        "I didn't know what I had, and I thought I had to leave",
        "I wish that I was homeward bound",
        "I wish that I was homeward bound",
        "I'm searching for a signal, holding out my phone",
        "Have I gone too far, am I on my own?",
        "No one here to hold me now",
        "No one here to hold me now",
        "I'm running out of oxygen",
        "Can't help but wish I'd stayed",
        "I'm lost just like Will Robinson",
        "Or rocket man in space",
        "Oh my god, I can't remember",
        "Who I was just last December",
        "What have I done, how did I get here?",
        "What have I done?",
        "Oh my god, look in the mirror",
        "I was young, nothing to fear once",
        "What have I done, how did I get here?",
        "What have I done?",
        "Mm, mm",
        "Mm, mm",
        "Mm, mm",
        "Oh my god, I can't remember",
        "Who I was just last December",
        "Who I was just last December",
        "Oh my god",
        "Oh my god, look in the mirror",
        "I was young, nothing to fear once",
        "What have I done, how did I get here?",
        "What have I done?",
        "Mm, mm",
        "Mm, mm"
    ];

    return (
        <div className="OhMyGod">
            <div style={{ width: 1626, height: 1300 }}>
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
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        Oh My God
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <span key={id}>{line}<br /></span>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img
                            src={B3}
                            alt=""
                            style={{ width: 550, marginLeft: 200 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Oh_my_god_song;