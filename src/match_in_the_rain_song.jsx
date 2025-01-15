import './style.css';
import two_wind from './2wind.jpeg';
import B5 from './B5.jpg';
import React from 'react';

function Match_in_the_rain_song () {
    const lyrics = [
        "Seems you've been changing lately",
        "I can feel the distance in your touch",
        "There's two people in this hallway",
        "But there's only one of us",
        "That's tryna keep this fire going",
        "Should I just give up?",
        "I sense trouble on the horizon",
        "I'm afraid our time is up",
        "The clouds are rolling in, I feel you drifting away",
        "And though my intuition tells me that it's too late",
        "That in these conditions, tryna bring back the flame is like",
        "Tryna light a match in the rain",
        "I still want to make you love me, make you love me again",
        "Even though my intuition tells me that it's the end",
        "That in these conditions tryna bring back the flame is like",
        "Tryna light a match in the rain",
        "Yeah, I can taste it, it's the end",
        "This love's impossible to save",
        "Though you embrace it, I can't face it",
        "So I look the other way",
        "There's trouble in your eyes",
        "But I pretend that we're okay",
        "I wish that we could compromise",
        "But there's just nothin' left to say",
        "The clouds are rolling in, I feel you drifting away",
        "And though my intuition tells me that it's too late",
        "That in these conditions, tryna bring back the flame is like",
        "Tryna light a match in the rain",
        "I still want to make you love me, make you love me again",
        "Even though my intuition tells me that it's the end",
        "That in these conditions tryna bring back the flame is like",
        "Tryna light a match in the rain",
        "Tryna light a match in the rain",
        "Like flyin' a kite in a hurricane",
        "Like ridin' a bike with no air chain",
        "On a broken road, it's a losing game",
        "Tryna light a match in the rain",
        "Like flyin' a kite in a hurricane",
        "Like ridin' a bike with no air chain",
        "On a broken road, it's a losing game",
        "The clouds are rolling in, I feel you drifting away",
        "And though my intuition tells me that it's too late",
        "That in these conditions, tryna bring back the flame is like",
        "Tryna light a match in the rain",
        "I still want to make you love me, make you love me again",
        "Even though my intuition tells me that it's the end",
        "That in these conditions tryna bring back the flame is like",
        "Tryna light a match in the rain"
    ];

    return (
        <div className="MatchInTheRain">
            <div style={{ width: 1626, height: 1200 }}>
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
                        Match In The Rain
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
                            src={B5}
                            alt=""
                            style={{ width: 550, marginLeft: 200 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Match_in_the_rain_song;