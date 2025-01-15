import './style.css';
import twelve_notes from './12notes.jpeg';
import A2 from './A2.jpeg';
import React from 'react';

function Ways_to_go_song() {
    const lyrics = [
        "[Chorus: Alec Benjamin & Khalid]",
        "I've been on my own for the longest time",
        "Searching for my own through uncertainty",
        "Got no place to go in this state of mind",
        "Tryna find a meaning in life, but I still got ways to go",
        "",
        "[Verse 1: Alec Benjamin, Alec Benjamin & Khalid]",
        "Searching through the darkness now, heartless",
        "Don't know where my heart is, wondering where the spark went",
        "I don't know where to go, but I know that I'll find my way",
        "Trusting in the process, trust I'm making progress",
        "I'm on the cusp, so just trust me, yeah, I got this",
        "I know, if I just hold on, that I'll have my day",
        "Mm, mm",
        "",
        "[Chorus: Alec Benjamin & Khalid]",
        "I've been on my own for the longest time",
        "Searching for my own through uncertainty",
        "Got no place to go in this state of mind",
        "Tryna find a meaning in life, but I still got ways to go",
        "",
        "[Post-Chorus: Khalid, Alec Benjamin, Khalid & Alec Benjamin]",
        "Yeah, yeah, yeah, yeah",
        "Ways to go",
        "Yeah, yeah, yeah, yeah",
        "Ways to go",
        "",
        "[Verse 2: Khalid, Khalid & Alec Benjamin]",
        "Easily forgotten, I'll be in the lost and found",
        "Off here, runnin' outta options",
        "Oh, I wish that there only was a way to make it all slow down",
        "And if I had the answers, maybe I could solve this",
        "Maybe it'd be easier than dealin' with my conscience",
        "It's a shame that I carry all this weight on my shoulders now (Yeah)",
        "",
        "[Chorus: Alec Benjamin & Khalid, Khalid]",
        "I've been on my own for the longest time (I don't wanna be by myself no more)",
        "Searching for my own through uncertainty (Yeah)",
        "Got no place to go in this state of mind",
        "Tryna find a meaning in life, but I still got ways to go",
        "",
        "[Post-Chorus: Khalid, Alec Benjamin, Khalid & Alec Benjamin]",
        "Yeah, yeah, yeah, yeah (Yeah)",
        "Ways to go",
        "Yeah, yeah, yeah, yeah",
        "Ways to go",
    ];

    return (
        <div className="WaysToGoSong">
            <div style={{ width: 1626, height: 1200 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={twelve_notes}
                        alt=""
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 574,
                            marginTop: 100,
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        Ways To Go
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
                        <img src={A2} alt="" style={{ width: 544, marginLeft: 250 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ways_to_go_song;