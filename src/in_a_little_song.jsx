import './style.css';
import twelve_notes from './12notes.jpeg';
import A3 from './A3.jpeg';
import React from 'react';

function In_a_little_song() {
    const lyrics = [
        "[Verse 1]",
        "I said I tried to change my ticket, but I couldn't get a flight",
        "Oh, I was ornery with the operator, almost caused a fight",
        "Woulda done it in a minute, woulda stayed another night",
        "With you, with you",
        "So I'll leave here in the morning, but I'll leave behind my heart",
        "I won't be grieving, won't be mourning even as my plane departs",
        "'Cause I'll be back with you, darling, soon, and I won't be apart",
        "From you, from you",
        "",
        "[Pre-Chorus]",
        "She turns and as she moves over",
        "She leans in and she pulls me closer",
        "And she whispers this in my ear",
        "",
        "[Chorus]",
        "\"Hold me in your arms again",
        "Even though you've gotta go in a little",
        "I know that it's not the end, but",
        "When you go, it leaves a hole in the middle",
        "Of my heart and in my chest",
        "All I've got is one last request",
        "Hold me in your arms again",
        "Even though you've gotta go in a little\"",
        "",
        "[Verse 2]",
        "She said, \"No need to change your ticket, oh, I know that you would stay here",
        "If you could and though it would be nice, don't worry, it's okay",
        "I understand, I get it that you have to go away",
        "I do, I do",
        "And when you leave here in the morning and you leave with me your heart",
        "I'll give you mine and we'll be fine, just know as you depart",
        "I'll be there with you, darling, we don't have to be apart",
        "It's true, it's true, mm",
        "",
        "[Pre-Chorus]",
        "She turns and as she moves over",
        "She leans in and she pulls me closer",
        "And she whispers this in my ear",
        "",
        "[Chorus]",
        "\"Hold me in your arms again",
        "Even though you've gotta go in a little",
        "I know that it's not the end, but",
        "When you go, it leaves a hole in the middle",
        "Of my heart and in my chest",
        "All I've got is one last request",
        "Hold me in your arms again",
        "Even though you've gotta go in a little\"",
        "",
        "[Outro]",
        "(Go) Gotta go in a little",
        "(Go) Gotta go in a little",
        "\"Of my heart and in my chest",
        "All I've got is one last request",
        "Hold me in your arms again",
        "Even though you've gotta go in a little\""
    ];

    return (
        <div className="InALittleSong">
            <div style={{ width: 1626, height: 1350 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={twelve_notes}
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 574,
                            marginTop: 100
                        }}
                        alt=""
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        In A Little
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
                            src={A3}
                            style={{ width: 736, marginLeft: 155 }}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default In_a_little_song;  