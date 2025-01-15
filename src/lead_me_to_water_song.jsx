import './style.css';
import twelve_notes from './12notes.jpeg';
import A9 from './A9.jpeg';
import React from 'react';

function Lead_me_to_water_song() {
    const lyrics = [
        "If you lead me to water, swear that I will drink",
        "Can you offer me a hand?",
        "I think I need you more than ever now, I need you more than ever",
        "I don't wanna suffer, I can't take the pain",
        "Can you lift me from the gutter, save me from the rain?",
        "Can you love me like a brother, tell me it's ok?",
        "Help me to recover and I'll run away",
        "Can you teach me to fish so I can feed myself?",
        "Can you help me like this, take me down to the well?",
        "Can you please take me down to the well? Mm-mm",
        "If you lead me to water, swear that I will drink",
        "Can you offer me a hand?",
        "I think I need you more than ever now, I need you more than ever",
        "If you lead me to water, then I'll take a sip",
        "Can you offer me a hand, your grip?",
        "I need you more than ever now, I need you more than ever",
        "I don't wanna struggle, I don't wanna die",
        "Right now, I'm in trouble, strugglin' to survive",
        "I don't know how to juggle how to live my life",
        "Wish I could be more subtle, but I don't wanna lie",
        "Can you teach me to fish so I can feed myself?",
        "Can you help me like this, take me down to the well?",
        "Can you please take me down to the well? Mm-mm",
        "If you lead me to water, swear that I will drink",
        "Can you offer me a hand?",
        "I think I need you more than ever now, I need you more than ever",
        "If you lead me to water, then I'll take a sip",
        "Can you offer me a hand, your grip?",
        "I need you more than ever now, I need you more than ever",
        "I don't think I can do it by myself",
        "I don't think I can do it by myself",
        "If you lead me to water, swear that I will drink",
        "Can you offer me a hand?",
        "I think I need you more than ever now, I need you more than ever",
        "If you lead me to water, then I'll take a sip",
        "Can you offer me a hand, your grip?",
        "I need you more than ever now, I need you more than ever",
        "Can you teach me to fish so I can feed myself?",
        "Can you help me like this, take me down to the well?",
        "Can you please take me down to the well? Mm-mm"
    ];

    return (
        <div className="LeadMeToWaterSong">
            <div style={{ width: 1626, height: 1070 }}>
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
                        Lead Me To Water
                    </p>
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
                        <img 
                            src={A9} 
                            alt=""
                            style={{ width: 736, marginLeft: 155 }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lead_me_to_water_song;